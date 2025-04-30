'use client';

import useGetQuery from '@/data/query/useGetQuery';
import { addToCart } from '@/data/redux/features';
import useSelectors from '@/data/redux/useSelectors';
import format_number from '@/utils/format_number';
import setCurrencyType from '@/utils/setCurrencyType';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ItemSize from '../ItemSize';

const Itemsbox = () => {
  const obj = useSelectors();
  const cont = useGetQuery('/contact', 'contact') || [];

  const data = Object.values(obj.cart);

  const dispatch = useDispatch();

  const [scrollPosition, setScrollPosition] = useState(0);

  const total_items = data.length;

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget; // safer than e.target, guaranteed to be the element the listener is attached to
    const { scrollTop, scrollHeight, clientHeight } = target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
  };

  const handleChange = (id: string, value: string) => {
    const obj = data
      .filter((v) => v.id === id)
      .map((v) => {
        const calc = Number(value) > 0 ? Number(value) : 1;
        return {
          ...v,
          qty: calc,
          total: Number(v.price) * Number(calc),
          size: '',
        };
      });

    const bj = {
      [id]: obj[0],
    };

    dispatch(addToCart(bj));
  };

  return (
    <>
      <div className="items-box" onScroll={handleScroll}>
        <table>
          <tbody>
            {[...data].map((v, k) => {
              const { curr, item_total } = setCurrencyType(
                obj,
                v.price,
                v.qty,
                cont
              );

              return (
                <tr key={k}>
                  <td>
                    <div
                      style={{
                        backgroundImage: `url(${v?.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                      }}
                    ></div>
                  </td>
                  <td>
                    <div>{v.title}</div>
                    <div>
                      <button>-</button>1<button>+</button>
                    </div>
                    <div>
                      <ItemSize id={v.id} obj={obj.cart} />
                    </div>
                  </td>
                  <td>
                    {curr} {format_number(item_total.toString())}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className={`scroll-box ${
            scrollPosition > 0 ? 'hide' : total_items > 3 ? 'show' : ''
          }`}
        >
          Scroll for more items
        </div>
      </div>
    </>
  );
};

export default Itemsbox;
