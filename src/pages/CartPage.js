import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

const CartPage = () => {
  const { cartItem } = useCart();
  return (
    <div className="p-4 mt-5">
      {cartItem.length === 0 && (
        <div className="text-center font-bold text-2xl">Cart is empty!</div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {cartItem &&
          cartItem.length > 0 &&
          cartItem.map((item) => <CartItem item={item} />)}
      </div>
    </div>
  );
};

export default CartPage;
