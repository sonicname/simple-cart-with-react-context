import { useCart } from "../../context/CartContext";

const ShopItem = ({ item }) => {
  const { addToCart } = useCart();
  const { image, title, rating, price } = item;
  const { rate, count } = rating;
  return (
    <div className="item flex flex-col border border-opacity-20 rounded shadow-lg p-3">
      <div className="w-full h-[250px]">
        <img className="w-full h-full object-cover" src={`${image}`} alt="" />
      </div>

      <div className="flex-1 flex flex-col mt-3">
        <h3 className="font-semibold text-[14px]">{title}</h3>

        <div className="mt-3 mt-auto">
          <div className="flex items-center justify-between mt-3 mb-3">
            <div className="flex items-center gap-x-1">
              <span className="opacity-80 text-sm">{rate}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="opacity-80 text-sm">{count}</span>
          </div>
          <p className="font-bold text-xl">{price}$</p>
          <button
            onClick={() => addToCart(item)}
            className="w-full rounded-lg bg-green-400 text-white font-semibold p-3 mt-2 hover:opacity-80 transition-all"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
