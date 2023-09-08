import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Details = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products/" + id)
			.then((res) => setProduct(res.data.product))
			.catch((err) => console.error(err));
	}, []);

	const handleClick = (productId) => {
		axios
			.delete(`http://localhost:8000/api/products/${productId}`)
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="mt-3">
			<h2 className="text-center">Item Details</h2>
			<div className="mt-3 text-center card shadow w-50 mx-auto">
				<div className="card-header fs-2">{product.title}</div>
				<div className="card-body">
					<p className="fs-4">Price: ${product.price}.00</p>
					<p className="fs-4 text-start">
						<span className="text-decoration-underline">Description:</span> {product.description}
					</p>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<button className="btn btn-primary" onClick={() => navigate(-1)}>
						⬅ Back
					</button>
					<div className="d-flex gap-3">
						<button className="btn btn-success">
							<Link to={`/products/${product._id}/edit`} className="text-white text-decoration-none">
								Edit 📝
							</Link>
						</button>
						<button className="btn btn-danger" onClick={() => handleClick(product._id)}>
							Delete 🗑️
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
