import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    product: "shoes-1",
    price: 1000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio abeius adipisci accusantium quo.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    product: "shoes-2",
    price: 500000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio abeius adipisci accusantium quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus reiciendis delectus ipsam possimus quidem debitis quis sunt nisi voluptatum. Quasi quisquam assumenda hic ab voluptatum alias, accusantium ipsa quaerat!",
  },
  {
    id: 3,
    title: "Sepatu Second",
    product: "shoes-2",
    price: 750000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  function handleAddToCart(id) {
    cart.find((item) => item.id === id)
      ? setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item,
          ),
        )
      : setCart([
          ...cart,
          {
            id,
            qty: 1,
          },
        ]);
  }

  return (
    <Fragment>
      <div className="flex justify-end bg-blue-600 text-white items-center h-20 px-5 gap-5">
        {email}
        <Button classname={"bg-slate-800 text-white"} onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5 px-5">
        <div className="w-3/5 flex flex-wrap justify-center gap-4">
          {products.map((el) => (
            <CardProduct key={el.id}>
              <CardProduct.Header product={el.product} />
              <CardProduct.Body title={el.title}>
                {el.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={el.price}
                onAddToCart={() => handleAddToCart(el.id)}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/5 flex flex-col flex-wrap items-center">
          <h1 className="text-3xl font-bold text-blue-600 text-center p-3">
            Cart
          </h1>
          {cart.length > 0 && (
            <table className="table-auto text-center">
              <thead>
                <tr>
                  <th className="p-2 border">Product Name</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id,
                  );

                  return (
                    <tr key={product.id}>
                      <td className="p-2 border">{product.title}</td>
                      <td className="p-2 border">{item.qty}</td>
                      <td className="p-2 border">
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="p-2 border">
                        {"Rp" +
                          (product.price * item.qty).toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "IDR",
                          })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Fragment>
  );
}
