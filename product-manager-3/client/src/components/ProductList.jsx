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
		<div className="mt-5 d-flex flex-column align-items-center">
			<h2>All Products</h2>
			<div className="mt-3" style={{ width: 500 }}>
				<table className="table table-bordered text-center fs-4">
					<tbody>
						{props.products.map((product, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Link to={`/products/${product._id}`} className="text-white">
											{product.title}
										</Link>
									</td>
									<td>
										<button
											className="btn btn-sm btn-danger"
											onClick={(e) => deleteProduct(product._id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductList;
