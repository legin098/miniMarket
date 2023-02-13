import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { formatCurrency } from "../utils/formatCurrency";
import { deleteProductsCart } from "../store/slices/cart.slice";

const Navbar = () => {
  const products = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const handleClickCart = () => {
    navigation("/cart");
  };

  const handleClickShoppingBag = () => {
    navigation("/");
  };

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const handleClickDeleteCart = () => {
    dispatch(deleteProductsCart());
  };

  const conditionClass = !!totalPrice ? "with-products" : "";

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div
          className="navbar__left-container"
          onClick={handleClickShoppingBag}
        >
          <i className="navbar__left-icon bx bxs-shopping-bag"></i>
        </div>
      </div>
      <div className="navbar__cart-contain">
        <div
          className={`navbar__cart ${conditionClass}`}
          onClick={handleClickCart}
        >
          <div className="navbar__cart-price-contain">
            <i className="navbar__cart-icon bx bxs-cart"></i>
            <h4 className="navbar__cart-price">{formatCurrency(totalPrice)}</h4>
          </div>
        </div>
        {!!totalPrice && (
          <div
            className="navbar__icon-x-contain"
            onClick={handleClickDeleteCart}
          >
            <i className="bx bx-x bx-xs"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
