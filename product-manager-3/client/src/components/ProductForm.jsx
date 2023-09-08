import { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");

	const [titleError, setTitleError] = useState("");
	const [priceError, setPriceError] = useState("");
	const [descriptionError, setDescriptionError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/api/products", {
				title,
				price,
				description
			})
			.then((res) => {
				console.log(res);

				if (res.data.errors) {
					setTitleError(res.data.errors.title.message);
					setPriceError(res.data.errors.price.message);
					setDescriptionError(res.data.errors.description.message);
				} else {
					setTitle("");
					setPrice(0);
					setDescription("");
					props.fetchProducts();
					if ((titleError, priceError, descriptionError)) {
						setTitleError("");
						setPriceError("");
						setDescriptionError("");
					}
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="card shadow w-50 mx-auto mt-3 mb-5">
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title:
						</label>
						<input
							type="text"
							id="title"
							className="form-control"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						{titleError ? <p className="form-text text-danger">{titleError}</p> : ""}
					</div>
					<div className="mb-3">
						<label htmlFor="number" className="form-label">
							Price:
						</label>
						<input
							type="number"
							id="number"
							className="form-control"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						{priceError ? <p className="form-text text-danger">{priceError}</p> : ""}
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description:
						</label>
						<input
							type="text"
							id="description"
							className="form-control"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						{descriptionError ? <p className="form-text text-danger">{descriptionError}</p> : ""}
					</div>
					<div className="text-center">
						<button className="btn btn-success w-25">Create</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProductForm;
