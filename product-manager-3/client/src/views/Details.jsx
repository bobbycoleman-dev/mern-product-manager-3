import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

	return (
		<div className="mt-3 text-center card shadow w-50 mx-auto">
			<div className="card-header fs-2">{product.title}</div>
			<div className="card-body">
				<p className="fs-4">Price: ${product.price}.00</p>
				<p className="fs-4 text-start">
					<span className="text-decoration-underline">Description:</span> {product.description}
				</p>
			</div>
			<div className="card-footer text-start">
				<button className="btn btn-primary" onClick={() => navigate(-1)}>
					⬅ Back
				</button>
			</div>
		</div>
	);
};

export default Details;
