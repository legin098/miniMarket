import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from "../data/info";
import { setProductView } from "../store/slices/products.slice";
import "./styles/ProductCard.css"
import { useAppSelector } from '../store/hooks/hooks';

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id} = useParams()
  const productsCart = useAppSelector((state) => state.cart);

  const currentProductCart = productsCart.find(
    (productCurrent) => productCurrent.id === product.id
  );

  const quantity = currentProductCart?.quantity || 0;

  const handleClick = () => {
    dispatch(setProductView(product))
    navigate(`/${product.id}`)
  }

  const conditionClass = id === product.id.toString() ? "active" : ""

  return (
    <article className={`productCard ${conditionClass}`} onClick={handleClick}>
      <div className="productCard__image">
        { !!quantity && <div className="product__quantity">{quantity}</div>}
        <img src={product.image} alt="" />
      </div>
    </article>
  );
};

export default ProductCard;
