import Address from '@/components/checkouts/Address';
import Items from '@/components/checkouts/Items';

const Checkout = () => {

  return (
  <div className="container checkout">
    <div>
      <Address />
    </div>
    <div>
      <Items />
    </div>
  </div>
  )
};

export default Checkout;
