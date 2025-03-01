import React, { useContext, useState } from "react";
import { AppContext } from "../Context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);
  const [formData, setformData] = useState({
    title: "",
    instructions: "",
    ingrediant1: "",
    ingrediant2: "",
    ingrediant3: "",
    ingrediant4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgURL: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const onSubmitHanlder = async (e) => {
    e.preventDefault();

    const {
      title,
      instructions,
      ingrediant1,
      ingrediant2,
      ingrediant3,
      ingrediant4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgURL,
    } = formData;

    const result = await addRecipe(
      title,
      instructions,
      ingrediant1,
      ingrediant2,
      ingrediant3,
      ingrediant4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgURL
    );

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
        console.log(result.data);
        setTimeout(()=>{
       navigate("/")
        },2000)
  };

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
    <div
      className="container my-5 pd-5"
      style={{ border: "3px solid grey", borderRadius: "10%", width: "500px" }}
    >
      <h2 className="text-center">Add Recipe</h2>
      <form
        onSubmit={onSubmitHanlder}
        style={{ width: "400px", margin: "auto" }}
        className="my-3 pd-3"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            value={formData.title}
            onChange={onChangeHandler}
            type="text"
            name="title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Instructions
          </label>
          <input
            value={formData.instructions}
            onChange={onChangeHandler}
            type="text"
            name="instructions"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant1
          </label>
          <input
            value={formData.ingrediant1}
            onChange={onChangeHandler}
            type="text"
            name="ingrediant1"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant2
          </label>
          <input
            value={formData.ingrediant2}
            onChange={onChangeHandler}
            type="text"
            name="ingrediant2"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant3
          </label>
          <input
            value={formData.ingrediant3}
            onChange={onChangeHandler}
            type="text"
            name="ingrediant3"
            className="form-control"
            id="exampleInputPassword3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant4
          </label>
          <input
            value={formData.ingrediant4}
            onChange={onChangeHandler}
            type="text"
            name="ingrediant4"
            className="form-control"
            id="exampleInputPassword4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty1
          </label>
          <input
            value={formData.qty1}
            onChange={onChangeHandler}
            type="text"
            name="qty1"
            className="form-control"
            id="exampleInputPassword5"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty2
          </label>
          <input
            value={formData.qty2}
            onChange={onChangeHandler}
            type="text"
            name="qty2"
            className="form-control"
            id="exampleInputPassword6"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty3
          </label>
          <input
            value={formData.qty3}
            onChange={onChangeHandler}
            type="text"
            name="qty3"
            className="form-control"
            id="exampleInputPassword7"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty4
          </label>
          <input
            value={formData.qty4}
            onChange={onChangeHandler}
            type="text"
            name="qty4"
            className="form-control"
            id="exampleInputPassword8"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ImgURL
          </label>
          <input
            value={formData.imgURL}
            onChange={onChangeHandler}
            type="text"
            name="imgURL"
            className="form-control"
            id="exampleInputPassword9"
          />
        </div>
        <div className="container d-grid col-6">
          <button type="submit" className="btn btn-primary my-3">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddRecipe;
