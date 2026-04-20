import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5 gap-2">
      <CardProduct>
        <CardProduct.Header product={"shoes-1"} />
        <CardProduct.Body title={"Sepatu Baru"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio ab
          eius adipisci accusantium quo, dolorem aliquid debitis repudiandae,
          autem pariatur omnis recusandae, ipsa id voluptatum dolore at eos
          officia.
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp1.000.000"} />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header product={"shoes-1"} />
        <CardProduct.Body title={"Sepatu Baru"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio ab
          eius adipisci accusantium quo, dolorem aliquid debitis repudiandae,
          autem pariatur omnis recusandae, ipsa id voluptatum dolore at eos
          officia.
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp1.000.000"} />
      </CardProduct>
    </div>
  );
}
