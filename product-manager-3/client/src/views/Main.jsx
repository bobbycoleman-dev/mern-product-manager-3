import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const fetchProducts = () => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				setProducts(res.data.products);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="mt-5">
			<h2 className="text-center ">Product Manager</h2>
			<ProductForm fetchProducts={fetchProducts} />
			<hr />
			{loaded && <ProductList products={products} />}
		</div>
	);
};

export default Main;
