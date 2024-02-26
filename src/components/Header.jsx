import { Link } from "react-router-dom";
import { LogoImg } from "../styles/Header";
import Logo from "../image/logo.svg";

const Header = () => {
  return (
    <Link to="/">
      <LogoImg src={Logo} />
    </Link>
  );
};

export default Header;
