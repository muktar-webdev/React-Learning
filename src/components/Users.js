import React, { useEffect, useState } from "react";
import User from "../components/User";
import Name from "../components/Name";
import Others from "../components/Others";

const Users = () => {
  const [users, setUsers] = useState([]);
  const first2Users = users.slice(0, 1);

  //--Data load --//
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div>
      {first2Users.map((user) => (
        <User user={user}></User>
      ))}
      {first2Users.map((user) => (
        <Name name={user.name}></Name>
      ))}
      {first2Users.map((user) => (
        <Others user={user}></Others>
      ))}
    </div>
  );
};

export default Users;
