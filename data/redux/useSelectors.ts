import { useSelector } from 'react-redux';
const useSelectors = () => {
  type stateType = {
    cart: {
      total: string;
      cart: object;
      currency: string;
      size: string;
      lastwatched: object;
    };
  };

  const data = useSelector((state: stateType) => state.cart);

  return data;
};

export default useSelectors;
