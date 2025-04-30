'use client';

import { deleteCart } from '@/data/redux/features';
import useSelectors from '@/data/redux/useSelectors';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import format_number from '@/utils/format_number';
import { useState } from 'react';
import setCurrencyType from '@/utils/setCurrencyType';
import useGetQuery from '@/data/query/useGetQuery';
import { useRouter } from 'next/navigation';
import getGrandTotal from '@/utils/getGrandTotal';

const Cart = () => {

  const router = useRouter()
  
  const obj = useSelectors();
  const cont = useGetQuery('/contact', 'contact') || [];

  const [showBox, setShowbox] = useState(false);

  const data = Object.values(obj.cart);
  const total = obj.total;

  const { curr: cur, grand_total: gtotal } = getGrandTotal(obj, total, cont);

  const dispatch = useDispatch();

  const val = data.length;

  const handleClick = (id: string) => {
    const ob = data
      .filter((v) => v.id !== id)
      .reduce((a, b) => {
        a[b.id] = b;
        return a;
      }, {});

    dispatch(deleteCart(ob));
  };

  const handleShowbox = () => {
    setShowbox(!showBox);
  };

  return (
    <div className="cart">

      <IoCartOutline />

      {val > 0 ? (
        <div onClick={handleShowbox} className="cart-total">
        {val}
        </div>
      ) : (
        ''
      )}

      {val > 0 ? (
        <div className={`cart-list ${showBox ? 'show' : 'hide'}`}>
          <div>
            <table>
              <tbody>
                {[...data].map((v, k) => {
                  const { curr, item_price } = setCurrencyType(
                    obj,
                    v.price,
                    1,
                    cont
                  );

                  const imgs = v?.img ? (
                    <Image src={v?.img} alt="" width="50" height="50" />
                  ) : (
                    ''
                  );

                  return (
                    <tr key={k}>
                      <td>{imgs}</td>
                      <td>
                        {v.title}
                        <br />
                        {curr} {format_number(item_price.toString())}
                      </td>
                      <td>
                        <span onClick={() => handleClick(v.id)}>X</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <div>
              <strong>TOTAL</strong>:{cur} {gtotal}
            </div>
            <button onClick={()=> router.push('/checkout')}>GO TO CHECKOUT</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
