import "./App.css";

import { Routes, Route } from "react-router-dom";
import CheckoutHomePage from "./pages/CheckoutHome";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/checkout" element={<CheckoutHomePage />} />
			</Routes>
		</div>
	);
}

export default App;
