import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { cartItem } = useCart();
  return (
    <div className="p-4 flex items-center justify-between shadow-md">
      <div className="flex gap-x-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-600 p-3 font-semibold rounded-lg"
              : "p-3 font-medium"
          }
        >
          Home
        </NavLink>
      </div>
      <div
        onClick={() => navigate("/cart")}
        className="bg-slate-400 p-3 rounded-lg hover:opacity-80 transition-all"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          <div className="absolute w-4 h-4 top-0 right-0 flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] -translate-y-1/3 translate-x-2/4">
            {cartItem && cartItem.length > 0 ? cartItem.length : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
