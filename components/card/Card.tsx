'use client';

import format_number from '@/utils/format_number';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/data/redux/features';
import useSelectors from '@/data/redux/useSelectors';
import useGetQuery from '@/data/query/useGetQuery';


type CardType = {
  id: string;
  title: string;
  img: string;
  price: string;
  link: string;
};

const Card = ({ title, img, link, price, id }: CardType) => {
  const dispatch = useDispatch();
  const cont = useGetQuery('/contact', 'contact') || [];

  const obj = useSelectors();


  let curr = 'GH₵'
  let item_price = Number(price)

  if(obj.currency === 'dollar'){
    curr = '$'
    item_price = Number(price) / Number(cont[0]?.dollar)
  }
  else if(obj.currency === 'euro'){
    curr = '€'
    item_price = Number(price) / Number(cont[0]?.euros)
  }
  else if(obj.currency === 'pounds'){
    curr = '£'
    item_price = Number(price) / Number(cont[0]?.pounds)
  }




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

const res = item_price.toString()

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
          <h4>{curr}{format_number(res)}</h4>
        </div>
        <div>{btn ? <BtnDisabled /> : <BtnEnabled />}</div>
      </div>
    </div>
  );
};

export default Card;
