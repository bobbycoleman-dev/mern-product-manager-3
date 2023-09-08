const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Product title is required"],
			minlength: [2, "Product title must be at least 2 characters long"]
		},
		price: {
			type: Number,
			required: [true, "Product price is required"],
			min: [1, "Product price must be more than $0.00"]
		},
		description: {
			type: String,
			required: [true, "Product description is required"],
			minlength: [10, "Product description must be at least 10 characters long"]
		}
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
