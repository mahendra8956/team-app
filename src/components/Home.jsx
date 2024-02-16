import React, { useEffect, useState } from "react";
import "../css/home.css";
import UserList from "./UserList";

const Home = () => {
  const [adminUser, setAdminUser] = useState([]);
  const [memberUser, setMemberUser] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetch(
          "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
        );
        const json = await data.json();
        const admin = json.filter((e) => e.role === "admin");
        const member = json.filter((e) => e.role === "member");
        setAdminUser(admin);
        setMemberUser(member);
      } catch (err) {
        console.error(err);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      //   console.log("ssssssssss");
      if (val.length > 0) {
        setAdminUser(
          adminUser.filter((e) => {
            return (
              e.first_name.toLowerCase().includes(val.toLowerCase()) ||
              e.last_name.toLowerCase().includes(val.toLowerCase())
            );
          })
        );

        setMemberUser(
          memberUser.filter((e) => {
            return (
              e.first_name.toLowerCase().includes(val.toLowerCase()) ||
              e.last_name.toLowerCase().includes(val.toLowerCase())
            );
          })
        );
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [val]);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <h1>Team</h1>
          </li>
          <li>
            <input
              id="searchbar"
              placeholder="Search"
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </li>
        </ul>
      </nav>
      <main className="container">
        <UserList userType="Administartor" users={adminUser} />
        <UserList userType="Members" users={memberUser} />
      </main>
    </>
  );
};

export default Home;
