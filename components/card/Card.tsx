'use client';

import format_number from '@/utils/format_number';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/data/redux/features';
import useSelectors from '@/data/redux/useSelectors';


type CardType = {
  id: string;
  title: string;
  img: string;
  price: string;
  link: string;
};

const Card = ({ title, img, link, price, id }: CardType) => {
  const dispatch = useDispatch();


  const obj = useSelectors();

  const btn = Object.keys(obj.cart).includes(id);

  const handleClick = () => {
    const bj = {
      [id]: {
        title,
        img,
        link,
        price,
        id,
      },
    };
    dispatch(addToCart(bj));

  };

  const BtnEnabled = () => {
    return (
      <button className="enabled-btn" onClick={handleClick}>
        Add to cart
      </button>
    );
  };

  const BtnDisabled = () => {
    return (
      <button className="disabled-btn" onClick={handleClick}>
        Add to cart
      </button>
    );
  };

  const router = useRouter();

  const subt = title.length < 30 ? title : title.slice(0, 5) + '...';
  return (
    <div className="card">
      <div
        onClick={() => router.push(link)}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        {' '}
        <div></div>
      </div>

      <h4 title={title}>{subt}</h4>

      <div>
        <div>
          <h4>GHs {format_number(price)}</h4>
        </div>
        <div>{btn ? <BtnDisabled /> : <BtnEnabled />}</div>
      </div>
    </div>
  );
};

export default Card;
