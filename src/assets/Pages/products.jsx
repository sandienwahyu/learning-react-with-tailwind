import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    product: "shoes-1",
    price: "Rp1.000.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio abeius adipisci accusantium quo.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    product: "shoes-2",
    price: "Rp500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio abeius adipisci accusantium quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus reiciendis delectus ipsam possimus quidem debitis quis sunt nisi voluptatum. Quasi quisquam assumenda hic ab voluptatum alias, accusantium ipsa quaerat!",
  },
  {
    id: 3,
    title: "Sepatu Second",
    product: "shoes-2",
    price: "Rp750.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  return (
    <Fragment>
      <div className="flex justify-end bg-blue-600 text-white items-center h-20 px-5 gap-5">
        {email}
        <Button classname={"bg-slate-800 text-white"} onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex flex-wrap justify-center py-5 gap-2">
        {products.map((el) => (
          <CardProduct key={el.id}>
            <CardProduct.Header product={el.product} />
            <CardProduct.Body title={el.title}>
              {el.description}
            </CardProduct.Body>
            <CardProduct.Footer price={el.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
}
