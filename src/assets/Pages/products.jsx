import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import TableCart from "../components/Fragments/TableCart";
import { getProducts } from "../../services/product.service";
import { useAuthLogin } from "../../hooks/useAuthLogin";
import Navbar from "../components/Layouts/Navbar";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const products = await getProducts();

export default function ProductsPage() {
  const { isLoading } = useAuthLogin();
  const { isDarkMode } = useContext(DarkMode);
  // const [cart, setCart] = useState(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        Loading...
      </div>
    );
  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center p-5 ${isDarkMode ? "bg-slate-600 text-white" : "bg-white text-slate-600"}`}
      >
        <div className="flex flex-wrap justify-center gap-4 flex-auto">
          {products.map((el) => {
            const title =
              el.title.length > 20
                ? `${el.title.substring(0, 20)}...`
                : el.title;
            const description =
              el.description.length > 100
                ? `${el.description.substring(0, 100)}...`
                : el.description;
            return (
              <CardProduct key={el.id}>
                <CardProduct.Header image={el.image} title={title} id={el.id} />
                <CardProduct.Body title={title}>{description}</CardProduct.Body>
                <CardProduct.Footer price={el.price} id={el.id} />
              </CardProduct>
            );
          })}
        </div>
        <TableCart products={products} />
      </div>
    </Fragment>
  );
}
