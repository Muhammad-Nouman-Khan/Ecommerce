import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      validate: {
        validator: function (images) {
          return images.length >= 1;
        },
        message: "A product must have at least one image.",
      },
      required: true,
    },

    description: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
          },
          comment: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.methods.calculateAverageRating = function () {
  if (this.reviews.length > 0) {
    this.averageRating =
      this.reviews.reduce((sum, review) => sum + review.rating, 0) /
      this.reviews.length;
    this.numReviews = this.reviews.length;
  } else {
    this.averageRating = 0;
    this.numReviews = 0;
  }
  return this.averageRating;
};

export const Product = mongoose.model("Product", productSchema);
