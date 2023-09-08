import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products/:id" element={<Details />} />
				<Route path="/products/:id/edit" element={<Update />} />
			</Routes>
		</div>
	);
}

export default App;
