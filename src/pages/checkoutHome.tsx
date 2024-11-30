import { useState } from "react";
import CartItems from "../components/CartItems";
import CheckoutSteps from "../components/CheckoutSteps";

function CheckoutHomePage() {
	const [checkoutStep, setCheckoutStep] = useState<number>(1);
	const handleStepChange = (step: number) => {
		setCheckoutStep(step);
	};
	return (
		<div className="flex flex-col sm:flex-row">
			<CheckoutSteps onStepChange={handleStepChange} />
			{(checkoutStep == 1 || checkoutStep == 2) && <CartItems />}
		</div>
	);
}

export default CheckoutHomePage;
