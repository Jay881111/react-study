import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className="card_set">
      {users.map((user) => {
        return (
          <Link to={`/users/${user.id}`} key={user.id} className="card">
            <div className="card-body"> {user.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default UserList;
