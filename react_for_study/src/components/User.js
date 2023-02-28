import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  }, [id]);

  const userDetail = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );

  return (
    <div>
      <h1>User 정보</h1>
      {userDetail}
    </div>
  );
};

export default User;
