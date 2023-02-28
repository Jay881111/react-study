import React from "react";
import "./Users.css";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className="card_set">
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <div className="card-body"> {user.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
