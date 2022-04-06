import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import { CartProvider } from "./context/CartContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Fragment />}>
        <CartProvider>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </Suspense>
    </Fragment>
  );
};

export default App;
