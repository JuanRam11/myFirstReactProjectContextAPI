import React, { useContext } from "react";
import Useritem from "./Useritem";
import Spinner from "./Spinner";
import GithubContext from "../context/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
