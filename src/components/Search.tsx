import { useState } from "react";
import { FormStyle } from "../styles/Search";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && input.length > 0) {
      navigate(`/searched/${input}`);
    } else {
      navigate("/");
    }
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
      </div>
    </FormStyle>
  );
};

export default Search;
