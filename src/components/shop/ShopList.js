import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import ShopItem from "./ShopItem";

const ShopList = () => {
  const { data } = useSWR("https://fakestoreapi.com/products", fetcher);
  if (!data) return null;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {data &&
        data.length > 0 &&
        data.map((item, index) => <ShopItem key={index} item={item} />)}
    </div>
  );
};

export default ShopList;
