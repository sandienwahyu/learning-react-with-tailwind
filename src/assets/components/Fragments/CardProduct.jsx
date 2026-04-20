import Button from "../Elements/Button";

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

function Header({ product }) {
  return (
    <a href="">
      <img
        src={`\\images\\${product}.jpg`}
        alt={product}
        className="pb-8 rounded-t-lg w-full"
      />
    </a>
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

function Footer({ price }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-white">{price}</span>
      <Button classname={"bg-blue-600"}>Add to Cart</Button>
    </div>
  );
}
