'use client';

import format_number from '@/utils/format_number';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type CardType = {
  title: string;
  img: string;
  price: string;
  link: string;
};
const Card = ({ title, img, link, price }: CardType) => {
  const [disabled, setDisable] = useState(false);

  const handleClick = () => {
    setDisable(true);
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
        <div>
          <button disabled={disabled} onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
