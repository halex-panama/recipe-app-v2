import { Link } from "react-router-dom";
import { Wrapper } from "../styles/Header";
import { GiKnifeFork } from "react-icons/gi";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <div>
          <GiKnifeFork />
          <h1>Recipe App</h1>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Header;
