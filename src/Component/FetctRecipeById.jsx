import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../Context/App_Context";
import { Link, useLocation } from "react-router-dom";

export const FetctRecipeById = ({ id }) => {
  const location = useLocation("")
  const { RecipeById } = useContext(AppContext);
  const [recipe, setrecipe] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await RecipeById(id);
      // console.log("Hey REcipe By Id", result)
      setrecipe(result.data.recipe);
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="text-center">
    <div
      className=" text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="d-flex justify-content-center align-items-center p-3">
        <img
          src={recipe.imgURL}
          className="card-img-top"
          alt="..."
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px",
            border: "2px solid yellow",
          }}
        />
      </div>
      <h3>{recipe.title}</h3>
    </div>
    {location.pathname !== "/saved" && (
      <>
        <div
          className="container "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div className="left">
            <h4>
              {recipe. ingrediant1} - {recipe.qty1}
            </h4>
            <h4>
              {recipe. ingrediant2} - {recipe.qty2}
            </h4>
            <h4>
              {recipe. ingrediant3} - {recipe.qty3}
            </h4>
            <h4>
              {recipe. ingrediant4} - {recipe.qty4}
            </h4>
          </div>
          <div className="right" style={{ maxWidth: "500px" }}>
            {recipe.instructions}
          </div>
        </div>
        <Link to={"/"} className="btn btn-warning my-5">
          Back to Home
        </Link>
      </>
    )}
  </div>
  );
};

export default FetctRecipeById;
