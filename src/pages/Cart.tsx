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

  if (totalPrice > 0) {
    //@ts-ignore
    var checkout: any = new WidgetCheckout({
      currency: "COP",
      amountInCents: Number(`${totalPrice}00`),
      reference: "AD002901221",
      publicKey: "pub_test_1vS5gDVWe0nXMxpakSoLlobzDWfMYDfu",
    });
  }

  const listProducts = products.map((product) => (
    <CartProduct key={product.id} product={product} />
  ));

  const handleClickPay = () => {
    checkout.open(function (result: any) {
      var transaction = result.transaction;
      console.log("Transaction ID: ", transaction.id);
      console.log("Transaction object: ", transaction);
    });
  };

  return (
    <section className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <hr className="cart__line" />
      <section className="cart__products">{listProducts}</section>
      <div className="cart__footer">
      <button className="cart__button" disabled={!totalPrice} onClick={handleClickPay}>
          Paga con Wompi
        </button>
        <h3 className="cart__price">
          <span className="cart__price-span">Total:</span>{" "}
          {formatCurrency(totalPrice)}
        </h3>
      </div>
    </section>
  );
};

export default Cart;
