'use client';

import Slider from '../components/Slider';
import useGetQuery from '@/data/query/useGetQuery';
import { itemType } from '@/type/type';
import { useEffect, useState } from 'react';
import Card from '@/components/card/Card';

export default function Home() {
  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  const data = useGetQuery('slider', '/slider') || [];

  const item = useGetQuery('item', '/item') || [];

  return (
    <section className="home">
      {data.length > 0 ? (
        <Slider data={data} width="100%" height={getHeight} />
      ) : (
        ''
      )}
      <div className="container item-wrapper">
        <h2>Trending & Best Selling</h2>

        <div>
          {item.map((v: itemType, k: number) => (
            <Card
              key={k}
              id={v.id}
              title={v.title}
              img={v.image}
              link="/"
              price={v.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
