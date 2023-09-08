import { Link } from "react-router-dom";

const ProductList = (props) => {
	return (
		<div className="text-center mt-5">
			<h2>All Products</h2>
			<div className="mt-3">
				{props.products.map((product, idx) => {
					return (
						<p className="mb-3 fs-4" key={idx}>
							<Link to={`/products/${product._id}`} className="text-white">
								{product.title}
							</Link>
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
