import ContactForm from "./ContactInfoForm";
import ShippingForm from "./ShippingInfoForm";
import { Button } from "./ui/button";

interface DeliveryProps {
	next: () => void;
}

function Delivery(props: DeliveryProps) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		console.log(data);
		props.next();
	}
	return (
		<form className="w-full flex flex-col gap-5 mt-7" onSubmit={handleSubmit}>
			<h1 className="text-2xl text-center md:text-start lg:text-start font-semibold">
				Enter Delivery Information
			</h1>
			<ContactForm />
			<ShippingForm />
			<Button
				type="submit"
				className="w-full bg-[#00B207] hover:bg-[#00B207] text-white rounded-sm"
			>
				Continue to payment
			</Button>
		</form>
	);
}

export default Delivery;
