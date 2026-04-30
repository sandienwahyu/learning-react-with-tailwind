import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../../redux/slices/cartSlice";
import Button from "../Elements/Button";

export default function TableCart({ products }) {
  const cart = useSelector((state) => state.cart.data);
  const totalPrice = cart.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);

    return acc + product.price * item.qty;
  }, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length === 0) return <></>;
  return (
    <div className="w-2/5 flex flex-col flex-wrap items-center flex-1">
      <h1 className="text-3xl font-bold text-blue-600 text-center p-3">Cart</h1>

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
            const product = products.find((product) => product.id === item.id);

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
        <Button
          classname={"bg-blue-600"}
          onClick={() => dispatch(deleteCart([]))}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
