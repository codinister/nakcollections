'use client';

import { setCurrency } from '@/data/redux/features';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Currency = () => {
  const [cur, setCur] = useState('cedi');
  const dispatch = useDispatch();

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCur(value);
    dispatch(setCurrency(value));
  };

  return (
    <div className="currency">
      <ul>
        <li>
          <label htmlFor="cedi" title="Cedis">
            ₵
          </label>
          <input
            id="cedi"
            checked={cur === 'cedi' ? true : false}
            onChange={handlechange}
            value="cedi"
            type="radio"
            name="cur"
          />
        </li>
        <li>
          <label htmlFor="dollar" title="Euro">
            $
          </label>
          <input
            id="dollar"
            onChange={handlechange}
            value="dollar"
            type="radio"
            name="cur"
          />
        </li>
        <li>
          <label htmlFor="pounds" title="Euro">
            £
          </label>
          <input
            id="pounds"
            onChange={handlechange}
            value="pounds"
            type="radio"
            name="cur"
          />
        </li>
        <li>
          <label htmlFor="euro" title="Euro">
            €
          </label>
          <input
            id="euro"
            onChange={handlechange}
            value="euro"
            type="radio"
            name="cur"
          />
        </li>
      </ul>
    </div>
  );
};

export default Currency;
