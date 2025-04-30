'use client';

import Address from '@/components/checkouts/Address';
import Items from '@/components/checkouts/Items';
import useSelectors from '@/data/redux/useSelectors';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Checkout = () => {
  const obj = useSelectors();
  const data = Object.values(obj.cart);

  const router = useRouter();

  useEffect(() => {
    if (data.length < 1) {
      router.push('/');
    }
  }, [obj]);

  return (
    <div className="container checkout">
      <div>
        <Address />
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
};

export default Checkout;
