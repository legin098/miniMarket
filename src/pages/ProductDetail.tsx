import "./styles/ProductDetail.css";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { addProduct, subtractProduct } from "../store/slices/cart.slice";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetail = () => {
  const productView = useAppSelector((state) => state.products.productView);
  const productsCart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();


  const currentProductCart = productsCart.find(
    (product) => product.id === productView.id
  );
  const quantity = currentProductCart?.quantity || 0;

  const handleClickLess = () => {
    dispatch(subtractProduct(productView));
  };

  const handleClickAdd = () => {
    dispatch(addProduct(productView));
  };

  return (
    <section className="productDetail">
      <h2 className="productDetail__title">Product</h2>
      <hr className="productDetail__line" />
      <article className="productDetail__container">
        <div className="productDetail__quantity">{quantity}</div>
        <header className="productDetail__header">
          <div className="productDetail__img">
            <img src={productView.image} alt={productView.title} />
          </div>
        </header>
        <section className="productDetail__info">
          <div className="productDetail__info-container">
            <div className="productDetail__price-container">
              <h3 className="productDetail__name">{productView.title}</h3>
              <div className="productDetail__dot"></div>
              <h3 className="productDetail__price">
                {formatCurrency(productView.price)}
              </h3>
            </div>
            <div className="productDetail__price-btns">
              <button
                className="productDetail__btn btn-less"
                onClick={handleClickLess}
              >
                {" "}
                -{" "}
              </button>
              <button
                className="productDetail__btn btn-plus"
                onClick={handleClickAdd}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <p className="productDetail__description">
            {productView.description}
          </p>
        </section>
      </article>
    </section>
  );
};

export default ProductDetail;
