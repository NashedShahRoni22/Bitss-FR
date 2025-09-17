export default function formatPriceDisplay(price) {
  return Number.isInteger(price) ? price : price.toFixed(2);
}
