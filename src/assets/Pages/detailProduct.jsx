import { useParams } from "react-router";
import { getProductDetails } from "../../services/product.service";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthLogin } from "../../hooks/useAuthLogin";
import Button from "../components/Elements/Button";

export default function DetailProductPage() {
  const { isLoading } = useAuthLogin();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function detailProduct() {
      try {
        const data = await getProductDetails(id);
        if (!data) {
          setError(true); // ← if no data, set error
          return;
        }
        setProduct(data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
    detailProduct();
  }, [id]);

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        Loading...
      </div>
    );

  if (error || !product)
    return (
      <div className="flex h-screen justify-center items-center text-red-500">
        Product not found!
      </div>
    );
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-row min-w-md max-w-[60%] bg-slate-400 rounded-2xl p-10 gap-8 items-center">
        <div className="basis-1/3 shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt="product.title"
            className="w-full h-auto object-contain drop-shadow-sm drop-shadow-white"
          />
        </div>
        <div className="basis-2/3 py-5 flex flex-col justify-between gap-2 flex-auto min-w-0">
          <h3 className="font-bold text-xl w-full">{product.title}</h3>
          <p className="text-sm font-bold text-gray-600 mb-3 ">
            ⭐ {product?.rating?.rate}/5.0 from {product?.rating?.count} reviews
          </p>
          <p className="mb-3 w-full text-md wrap-break-word whitespace-normal">
            {product.description}
          </p>
          <div className="flex gap-2">
            <Button classname={"bg-blue-600 w-full"}>Add to Cart</Button>
            <Button classname={"bg-blue-600 w-full"}>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
