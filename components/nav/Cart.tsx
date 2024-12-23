'use client';

import { deleteCart } from '@/data/redux/features';
import useSelectors from '@/data/redux/useSelectors';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const obj = useSelectors();
  const data = Object.values(obj.cart);
  const total = obj.total;

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

  return (
    <div className="cart">
      <IoCartOutline />

      {val > 0 ? <div className="cart-total">{val}</div> : ''}

      {val > 0 ? (
        <div className="cart-list">
          <table>
            <tbody>
              {data.map((v, k) => (
                <tr key={k}>
                  <td>
                    <Image src={v.img} alt="" width="40" height="40" />
                  </td>
                  <td>
                    {v.title}
                    <br />
                    {v.price}
                  </td>
                  <td>
                    <span onClick={() => handleClick(v.id)}>X</span>
                  </td>
                </tr>
              ))}
              <tr>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
