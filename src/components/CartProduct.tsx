import "./styles/CartProduct.css";
import { IProductCart } from "../store/slices/cart.slice";

interface IProps {
  product: IProductCart;
}

const CartProduct = ({ product }: IProps) => {
  return (
    <article className="cartProduct">
      <div className="cartProduct__circle">
        <h4 className="cartProduct__quantity">{product.quantity}</h4>
      </div>
      <div className="cartProduct__img">
        <img src={product.image} alt={product.title} />
      </div>
    </article>
  );
};

export default CartProduct;
