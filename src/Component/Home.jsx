import React from "react";
import { AppContext } from "../Context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
  const { recipe, SavedRecipeById} = useContext(AppContext);

  const saved = async(id)=>{
    const result = await SavedRecipeById(id);
    // console.log(result);
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
  }
  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={11}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="text-center mx-auto " style={{ width: "1200px" }}>
        <div className="row d-flex justify-content-center align-items-center">
          {recipe.map((data) => (
            <div key={data._id} className="col-md-3 my-3 gap-1">
              <div className="card bg-black text-light" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imgURL}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "200px", height: "200px",borderRadius:"10px",border:"2px solid yellow" }}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <div className="my-3">
                    <button className="btn btn-primary mx-3" onClick={()=>saved(data._id)}>Save</button>
                    <button className="btn btn-warning" 
                    onClick={()=>navigate(`/${data._id}`)}>View More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
