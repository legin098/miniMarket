import products from "../data/info";
import "./styles/ListProducts.css";
import ProductCard from "./ProductCard";

const ListProducts = () => {
  const listProducts = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <section className="listProducts">
      <h2 className="listProducts__title">Store</h2>
      <hr className="listProducts__line" />
      <section className="listProducts__container">{listProducts}</section>
    </section>
  );
};

export default ListProducts;
