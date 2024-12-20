'use client'

import Slider from "../components/Slider";
import useGetQuery from "@/data/query/useGetQuery";
import {useEffect,useState} from 'react'

export default function Home() {
  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  const data = useGetQuery('slider', '/slider') || [];




  return (
    <section className="home">
          {data.length > 0 ? (
          <Slider data={data} width="100%" height={getHeight} />
        ) : (
          ''
        )}
      HOME PAGE
    </section>
  );
}
