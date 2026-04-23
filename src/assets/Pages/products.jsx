import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useEffect } from "react";
import { getProducts } from "../../services/product.service";

const products = await getProducts();

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const totalPrice = cart.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);

    return acc + product.price * item.qty;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log(getProducts());
  }, []);

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
                <CardProduct.Header image={el.image} title={title} />
                <CardProduct.Body title={title}>{description}</CardProduct.Body>
                <CardProduct.Footer
                  price={el.price}
                  onAddToCart={() => handleAddToCart(el.id)}
                />
              </CardProduct>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div className="w-2/5 flex flex-col flex-wrap items-center">
            <h1 className="text-3xl font-bold text-blue-600 text-center p-3">
              Cart
            </h1>

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

                  const title =
                    product.title.length > 20
                      ? `${product.title.substring(0, 20)}...`
                      : product.title;

                  return (
                    <tr key={product.id}>
                      <td className="p-2 border">{title}</td>
                      <td className="p-2 border">{item.qty}</td>
                      <td className="p-2 border">
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="p-2 border">
                        {"$" +
                          (product.price * item.qty).toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "USD",
                          })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3} className="p-2 border font-bold">
                    Total Price
                  </td>
                  <td className="p-2 border font-bold">
                    {"$" +
                      totalPrice.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex w-full justify-end items-center py-5">
              <Button classname={"bg-blue-600"} onClick={() => setCart([])}>
                Clear
              </Button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
