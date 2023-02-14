import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default model;
