import { useContext } from "react";
import CartContext from "../Context/CartContext";

export default function useCart() {
  const cartItems = useContext(CartContext);
  return cartItems;
}
