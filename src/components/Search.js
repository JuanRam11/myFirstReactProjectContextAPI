import React, { useState, useContext } from "react";
import GithubContext from "../context/githubContext";
import AlertContext from "../context/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, onSearch, clearSearch } = githubContext;
  const { onAlert } = alertContext;

  const [text, setText] = useState("");

  const Onsubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      onAlert("Please Type Something on Search", "Danger");
    } else {
      onSearch(text);
      setText("");
    }
  };

  const Onchange = (e) => setText(e.target.value);

  return (
    <form onSubmit={Onsubmit}>
      <input
        type="text"
        name="text"
        className="form-control"
        placeholder="Search"
        value={text}
        onChange={Onchange}
      ></input>
      <input
        type="submit"
        value="Search"
        className="btn-dark btn-block form-control mt-2"
      />
      {users.length > 0 && (
        <button
          className="btn btn-secondary form-control mt-2"
          onClick={clearSearch}
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
