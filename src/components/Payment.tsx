import { Button } from "./ui/button";
import { Card } from "./ui/card";
import MasterCard from "../assets/checkout-icons/Mastercard.svg";
import Visa from "../assets/checkout-icons/Visa.svg";
import PayPal from "../assets/checkout-icons/PayPal.svg";
import GooglePay from "../assets/checkout-icons/GooglePay.svg";
import BankTransfer from "../assets/checkout-icons/BankTransfer.svg";
import { ChevronLeft } from "lucide-react";

function Payment(props: any) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		console.log(data);
		props.next();
	}
	return (
		<form className="w-full flex flex-col gap-5 mt-7" onSubmit={handleSubmit}>
			<div className="w-full">
				<h1 className="text-2xl md:text-start font-semibold text-center">
					Choose a payment method
				</h1>
				<p className="text-center md:text-start text-sm my-2">
					All transactions are secure and encrypted.
				</p>
			</div>
			<Card>
				<div className="border-b-[1px] border-[#E2E2E2] w-full flex items-center justify-between gap-1 p-4">
					<div className="radio-container">
						<input
							type="radio"
							id="card"
							name="payment_method"
							value="card"
							className="radio-input"
							defaultChecked
						/>
						<label
							htmlFor="card"
							className="radio-label-lg text-md text-start font-semibold"
						>
							Card
						</label>
					</div>
					<div className="flex gap-1">
						<img src={MasterCard} alt="Payment Method" />
						<img src={Visa} alt="Payment Method" />
					</div>
				</div>
				<div className="border-b-[1px] border-[#E2E2E2] w-full flex items-center justify-between gap-1 p-4">
					<div className="radio-container">
						<input
							type="radio"
							id="paypal"
							name="payment_method"
							value="paypal"
							className="radio-input"
						/>
						<label
							htmlFor="paypal"
							className="radio-label-lg text-md text-start font-semibold"
						>
							Pay with PayPal
						</label>
					</div>
					<div>
						<img src={PayPal} alt="Payment Method" />
					</div>
				</div>
				<div className="border-b-[1px] border-[#E2E2E2] w-full flex items-center justify-between gap-1 p-4">
					<div className="radio-container">
						<input
							type="radio"
							id="google_pay"
							name="payment_method"
							value="google_pay"
							className="radio-input"
						/>
						<label
							htmlFor="google_pay"
							className="radio-label-lg text-md text-start font-semibold"
						>
							Pay with Google Pay
						</label>
					</div>
					<div>
						<img src={GooglePay} alt="Payment Method" />
					</div>
				</div>
				<div className="w-full flex items-center justify-between gap-1 p-4">
					<div className="radio-container">
						<input
							type="radio"
							id="bank_transfer"
							name="payment_method"
							value="bank_transfer"
							className="radio-input"
						/>
						<label
							htmlFor="bank_transfer"
							className="radio-label-lg text-md text-start font-semibold"
						>
							Pay with Bank Transfer
						</label>
					</div>
					<div>
						<img src={BankTransfer} alt="Payment Method" />
					</div>
				</div>
			</Card>
			<div className="flex justify-between items-center gap-2">
				<p
					className="flex text-start lg:gap-2 gap-1 items-center text-sm text-[#1C6328]"
					onClick={props.back}
				>
					{" "}
					<ChevronLeft /> Back to delivery
				</p>
				<div>
					<Button className="bg-[#00B207] hover:bg-[#00B207] text-sm text-white rounded-sm">
						Review your order
					</Button>
				</div>
			</div>
		</form>
	);
}

export default Payment;
