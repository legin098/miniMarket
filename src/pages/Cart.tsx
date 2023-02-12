import CartProduct from "../components/CartProduct";
import "./styles/Cart.css";
import { useAppSelector } from "../store/hooks/hooks";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {
  const products = useAppSelector((state) => state.cart);

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const listProducts = products.map((product) => (
    <CartProduct key={product.id} product={product} />
  ));

  return (
    <section className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <hr className="cart__line" />
      <section className="cart__products">{listProducts}</section>
      <h3 className="cart__price">
        <span className="cart__price-span">Total:</span>{" "}
        {formatCurrency(totalPrice)}
      </h3>
    </section>
  );
};

export default Cart;
