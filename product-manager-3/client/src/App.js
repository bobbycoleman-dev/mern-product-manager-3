import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products/:id" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
