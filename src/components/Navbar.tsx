import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks/hooks";
import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
  const products = useAppSelector((state) => state.cart);
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/cart");
  };

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__left-container">
          <i className="navbar__left-icon bx bxs-shopping-bag"></i>
        </div>
      </div>
      <div className="navbar__cart" onClick={handleClick}>
        <i className="navbar__cart-icon bx bxs-cart"></i>
        <h4 className="navbar__cart-price">{formatCurrency(totalPrice)}</h4>
      </div>
    </nav>
  );
};

export default Navbar;
