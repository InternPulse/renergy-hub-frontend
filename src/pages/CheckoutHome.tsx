import CartItems from "../Components/CartItems";
import CheckoutSteps from "../Components/CheckoutSteps";

function CheckoutHomePage() {
	return (
		<div className="flex flex-col sm:flex-row">
			<CheckoutSteps />
			<CartItems />
		</div>
	);
}

export default CheckoutHomePage;
