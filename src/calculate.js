export default function calculateTotal(purchases) {
  let result = 0;
  for (let i = 0; i < purchases.length; i += 1) {
    result += purchases[i].count * purchases[i].price;
  }
  return result;
}
