export const saveProductInfo = (productInfo) => {
  if (productInfo) {
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
  }
};
