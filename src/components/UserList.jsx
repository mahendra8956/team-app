import React from "react";
import UserCard from "./UserCard";
import "../css/userlist.css";

const UserList = ({ userType, users }) => {
  // console.log(users);
  return (
    <div className="userlist">
      <h1 id="usertype">{userType}</h1>
      <div className="cards">
        {users.map((e) => {
          return <UserCard key={e.email} user={e} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
