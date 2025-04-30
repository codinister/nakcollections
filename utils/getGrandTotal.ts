import format_number from './format_number';

const getGrandTotal = (
  obj: { currency: string },
  total: string,
  cont: { dollar: string; euros: string; pounds: string }[]
) => {
  let curr = 'GH₵';
  let grandtotal = Number(total);

  if (obj.currency === 'dollar') {
    curr = '$';
    grandtotal = Number(total) / Number(cont[0]?.dollar);
  } else if (obj.currency === 'euro') {
    curr = '€';
    grandtotal = Number(total) / Number(cont[0]?.euros);
  } else if (obj.currency === 'pounds') {
    curr = '£';
    grandtotal = Number(total) / Number(cont[0]?.pounds);
  }

  const grand_total = format_number(String(grandtotal));


  return { curr, grand_total };
};

export default getGrandTotal;
