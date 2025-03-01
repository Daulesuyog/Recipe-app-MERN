import React from "react";

function AddRecipe() {
  return (
    <div
      className="container my-5 pd-5"
      style={{ border: "3px solid grey", borderRadius: "10%", width: "500px" }}>
         <h2 className="text-center">Add Recipe</h2>
      <form style={{ width: "400px", margin: "auto" }} className="my-3 pd-3">

      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Instructions
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant1
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant2
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant3
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ingrediant4
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           qty1
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
         qty2
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty3
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            qty4
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ImgURL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="container d-grid col-6">
          <button type="submit" className="btn btn-primary my-3">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
