'use client';

import format_number from '@/utils/format_number';
import { useRouter } from 'next/navigation';
import {  useDispatch } from 'react-redux';
import { addToCart } from '@/data/redux/features';
import {useEffect} from 'react'
import useSelectors from '@/data/redux/useSelectors';


type CardType = {
  id: string;
  title: string;
  img: string;
  price: string;
  link: string;
};







const Card = ({ title, img, link, price, id }: CardType) => {
  
  const dispatch = useDispatch()

 
  useEffect(()=>{

    dispatch(addToCart(id))


  }, [dispatch,id])


  const obj = useSelectors()

  const btn = Object.keys(obj.cart).includes(id)

  console.log(btn)
  console.log(obj.total)







  // const handleClick = () => {
  //   setDisable(true);
  // };

  // const BtnEnabled = ()=>{
  //   return (
  //     <button className="enabled-btn"  onClick={handleClick}>
  //     Add to cart
  //   </button>
  //   )
  // }
  
  // const BtnDisabled = ()=>{
  //   return (
  //     <button className="disabled-btn" disabled={disabled} onClick={handleClick}>
  //     Added to cart
  //   </button>
  //   )
  // }


  

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
        <div>
{}
        </div>
      </div>
    </div>
  );
};

export default Card;
