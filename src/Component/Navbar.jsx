import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/App_Context.jsx";

function Navbar() {
  const [isAuthenticate, setisAuthenticate, logout] = useContext(AppContext)
  return (
    <div>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left">
          <h1>MERN Recipe </h1>
        </Link>
        <div className="right">
          {isAuthenticate && (<>
            <Link to={"/add"} className="btn btn-info mx-2">
            Add
          </Link>
          <Link to={"/profile"} className="btn btn-light mx-2">
            Profile
          </Link>
          <div className="btn btn-warning mx-2"onClick={logout}>LogOut</div>
          </>)}
          {!isAuthenticate &&(
            <>
               <Link to={"/login"} className="btn btn-primary mx-2">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-warning mx-2">
            Register
          </Link>
            </>
          )}
          <Link to={"/login"} className="btn btn-primary mx-2">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-warning mx-2">
            Register
          </Link>
          <Link to={"/add"} className="btn btn-info mx-2">
            Add
          </Link>
          <div className="btn btn-warning mx-2">LogOut</div>
          <Link to={"/saved"} className="btn btn-danger mx-2">
            Saved
          </Link>
          <Link to={"/profile"} className="btn btn-light mx-2">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
