import "./styles/CartProduct.css";
import { IProductCart } from "../store/slices/cart.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { setProductView } from "../store/slices/products.slice";

interface IProps {
  product: IProductCart;
}

const CartProduct = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickProduct = () => {
    dispatch(setProductView(product));
    navigate(`/${product.id}`);
  };

  return (
    <article className="cartProduct" onClick={handleClickProduct}>
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
