import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext(undefined);

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useLocalStorage("cart", []);

  const addToCart = (item) => {
    const isExists = cartItem.filter((i) => i.id === item.id).length !== 0;
    if (!isExists) {
      setCartItem((prevItem) => [...prevItem, item]);
    }
  };

  const removeFromCart = (itemID) => {
    const updatedCart = cartItem.filter((item) => item.id !== itemID);
    setCartItem(updatedCart);
  };

  const value = {
    cartItem,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (typeof context === "undefined")
    throw new Error("useCart must be used within a CartProvider");
  return context;
};

export { useCart, CartProvider };
