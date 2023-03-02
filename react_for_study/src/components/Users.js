import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";
import Spinner from "./Spinner";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);
  console.log("users", users);

  return (
    <div>
      <h1 className="text-center">UserLists</h1>
      <div>{loading ? <Spinner /> : <UserList users={users} />}</div>
    </div>
  );
};

export default Users;
