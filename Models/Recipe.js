import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title:{
        type:String, required:true,
    },
    instructions:{
      type:String, required:true,
    },
    ingrediant1:{type:String},
    ingrediant2:{type:String},
    ingrediant3:{type:String },
    ingrediant4:{type:String },

    qty1:{type:String},
    qty2:{type:String},
    qty3:{type:String},
    qty4:{type:String},

    imgURL:{type:String, required:true,},

    user:{
        type:mongoose.Schema.Types.ObjectId,ref:"user"
    }
});

export const Recipe = mongoose.model("recipe",recipeSchema);