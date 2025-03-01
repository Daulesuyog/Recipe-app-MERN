import React, { useContext } from "react";
import FetctRecipeById from "./FetctRecipeById";
import { AppContext } from "../Context/App_Context";
import { data } from "react-router-dom";

function Saved() {
  const { saveRecipe } = useContext(AppContext);
  return (
    <div>
      <div className="row container">
      {saveRecipe?.map((data) => (
        <div className="col-md-3" key={data.recipe}>
        <FetctRecipeById  id={data.recipe} />
        </div>
      ))};
      
      </div>
    </div>
  );
}

export default Saved;
