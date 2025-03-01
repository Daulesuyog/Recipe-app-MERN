import React, { useContext, useState } from "react";
import { AppContext } from "../Context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import {useNavigate} from "react-router-dom"

function Register() {
  const navigate = useNavigate()
    const { register } = useContext(AppContext);
    //for name updation purpose
    const [name, setname] = useState("");
    //for gmail updation pupropse
    const [gmail, setgmail] = useState("");
    //for password updation purpose
    const [password, setpassword] = useState("");

    const RegisterHandler = async (e) => {
        e.preventDefault();
        const result = await register(name,gmail, password);
        toast.success(result.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log(result.data);
        if(result.data.message !== "User Already Existed"){
          setTimeout(()=>{
            navigate("/login")
             },2000)
        }
        
      }
  return (
    <div
      className="container my-5 pd-5"
      style={{ border: "3px solid grey", borderRadius: "10%", width: "500px" }}>
         <h2 className="text-center">Register</h2>
      <form onSubmit={RegisterHandler}
      style={{ width: "400px", margin: "auto" }} className="my-3 pd-3">

      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
          value={name}
          onChange={(e)=>setname(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Email
          </label>
          <input
          value={gmail}
          onChange={(e)=>setgmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label">
            Password
          </label>
          <input
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="container d-grid col-6">
          <button type="submit" className="btn btn-primary my-3">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
