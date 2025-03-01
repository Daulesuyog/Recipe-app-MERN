import mongoose from "mongoose";

const SavedrecipeSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe",
  },
});

export const SavedRecipe = mongoose.model("SavedRecipe", SavedrecipeSchema);
