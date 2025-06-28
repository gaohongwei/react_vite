import React, { createContext, useContext } from "react";

const UserContext = createContext({
  name: "Guest",
  email: "gust@gmail.com"
});

function ShowUser() {
  const { name, email } = useContext(UserContext);
  return (
    <div>
      <div>
        {name}:{email}
      </div>
    </div>
  );
}

function Provider() {
  const user = { name: "wei", email: "wei@gmail.com" };
  return (
    <UserContext.Provider value={user}>
      <ShowUser />
      <ShowUser />
    </UserContext.Provider>
  );
}

export default Provider;
