import React from "react";
import "../css/usercard.css";

const UserCard = ({ user }) => {
  return (
    <div className="usercard">
      <img src={user.img} alt={user.first_name} />
      <div>
        <h3 id="name">{user.first_name + " " + user.last_name}</h3>
        <p id="email">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
