import Button from "../Elements/Button";
import { Link } from "react-router";

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default function CardProduct({ children }) {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow p-8 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header({ image, title, id }) {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt={title}
        className="pb-8 rounded-t-lg w-full h-60 object-contain drop-shadow-sm drop-shadow-gray-300"
      />
    </Link>
  );
}

function Body({ children, title }) {
  return (
    <div className="mb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white text-justify">{children}</p>
      </a>
    </div>
  );
}

function Footer({ price, onAddToCart }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-white">
        {`$ `}
        {price.toLocaleString("id-ID", {
          styles: "currency",
          currency: "USD",
        })}
      </span>
      <Button classname={"bg-blue-600"} onClick={onAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}
