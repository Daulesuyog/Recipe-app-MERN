import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context.jsx";
import axios from "axios";

function AppState(props) {
  const url = "http://localhost:3000/api";

  const [token, settoken] = useState("");

  useEffect(() => {
    // login("tawde2003@gmail.com", "1981")
  }, []);

  //For register purpose
  const register = async (name, gmail, password) => {
    const api = await axios.post(
      `${url}/register`,
      { name,gmail, password },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    settoken(api.data.token);
    return api;
  };

  //For login purpose
  const login = async (gmail, password) => {
    const api = await axios.post(
      `${url}/login`,
      { gmail, password },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    settoken(api.data.token);

    return api;
    // console.log("Login data",api);
  };
  return (
    <div>
      <AppContext.Provider value={{ login, register}}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default AppState;
