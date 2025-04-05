import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String, //optional
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
