import CartItems from "../components/CartItems";
import CheckoutSteps from "../components/CheckoutSteps";

function CheckoutHomePage() {
	return (
		<div className="flex flex-col sm:flex-row">
			<CheckoutSteps />
			<CartItems />
		</div>
	);
}

export default CheckoutHomePage;
