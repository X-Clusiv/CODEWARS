const rentPrice = 40;
function rentalCarCost(d) {
  let fullPrice = 40 * d;
  let sale = 0;
  if(d >=7){
    sale = 50;
  }
  if(d >= 3 && d < 7){
    sale = 20;
  }
  return fullPrice - sale;
}