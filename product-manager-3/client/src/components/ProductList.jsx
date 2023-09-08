import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
	const deleteProduct = (productId) => {
		axios
			.delete(`http://localhost:8000/api/products/${productId}`)
			.then((res) => {
				props.removeFromDom(productId);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="text-center mt-5">
			<h2>All Products</h2>
			<div className="mt-3">
				{props.products.map((product, idx) => {
					return (
						<div className="d-flex gap-2 align-items-center justify-content-center">
							<p className="mb-3 fs-4" key={idx}>
								<Link to={`/products/${product._id}`} className="text-white">
									{product.title}
								</Link>
							</p>
							<button className="btn btn-sm btn-danger" onClick={(e) => deleteProduct(product._id)}>
								Delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
