import { useEffect, useState } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Review from "./CheckoutReview";
import { Check, Printer } from "lucide-react";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
} from "../components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
type CheckoutProps = {
	onStepChange: (step: number) => void;
};

function CheckoutSteps({ onStepChange }: CheckoutProps) {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
	const checkoutComplete = () => setIsDialogOpen(true);
	const [step, setStep] = useState<number>(1);
	function nextStep() {
		setStep(step + 1);
	}
	function previousStep() {
		setStep(step - 1);
	}
	useEffect(() => {
		onStepChange(step);
	}, [step]);
	return (
		<section
			className={`${
				step == 1 || step == 2 ? "bg-[#EDF2EE]" : ""
			} min-h-[100dvh] sm:w-[50dvw] w-[100%] p-[2rem] lg:p-[4rem] lg:pe-[2rem] lg:pt-[2rem] sm:p-[3rem] sm:pe-[1.5rem] sm:pt-[1.5rem] flex items-center flex-col gap-5`}
		>
			<div className="w-full checkout-progress-bar flex justify-center items-center flex-col">
				<div className=" w-[93%] max-w-[457px] ">
					<div className="flex justify-evenly items-center">
						{step == 1 ? (
							<div className="progress-point active rounded-full"></div>
						) : (
							<div className="progress-point done rounded-full flex items-center justify-center">
								<Check className="w-4 h-4 text-[#1c6328]" />
							</div>
						)}
						<span className="progress-connector grow p-[0.1rem]"></span>
						{step == 1 && <div className="progress-point rounded-full"></div>}
						{step == 2 && (
							<div className="progress-point active rounded-full"></div>
						)}
						{step == 3 && (
							<div className="progress-point done rounded-full flex items-center justify-center">
								<Check className="w-4 h-4 text-[#1c6328]" />
							</div>
						)}
						<span className="progress-connector grow p-[0.1rem]"></span>
						{step == 3 ? (
							<div className="progress-point active rounded-full"></div>
						) : (
							<div className="progress-point rounded-full"></div>
						)}
					</div>
				</div>
				<div className="flex w-[95%] max-w-[465px] justify-between items-center mt-1">
					<p className="text-[10px]">Delivery</p>
					<p className="text-[10px]">Payment</p>
					<p className="text-[10px]">Review</p>
				</div>
			</div>
			{step == 1 && <Delivery next={nextStep} />}
			{step == 2 && <Payment back={previousStep} next={nextStep} />}
			{step == 3 && <Review back={previousStep} next={checkoutComplete} />}
			<AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<AlertDialogContent className="w-[90%] px-[3rem]">
					<AlertDialogHeader>
						<AlertDialogTitle className="flex items-center justify-start">
							{/* <AlertDialogCancel>
								<span className="rounded-full p-2 bg-[#EDF2EE]">
									<X className="h-4 w-4 text-[#1c6328]" />
								</span>
							</AlertDialogCancel> */}
						</AlertDialogTitle>
						<AlertDialogDescription className="w-full flex text-black flex-col gap-5 items-start justify-center">
							<div className="w-full ">
								<h1 className="text-2xl sm:text-start text-center">
									🎉 Thank You for Your Order!
								</h1>
								<p className="text-xs my-2 sm:text-start text-center">
									Your order has been placed successfully!
								</p>
							</div>
							<div className="w-full flex flex-col gap-3">
								<p className="font-semibold text-lg">Order Confirmation</p>

								<div className="w-full md:w-[80%] flex flex-col gap-2 items-start ">
									<p className="w-full flex items-center justify-between text-xs gap-1 font-bold">
										<span>Tracking ID</span>
										<span>1234567</span>
									</p>
									<p className="w-full flex items-center justify-between text-xs gap-1">
										<span>Date</span>
										<span>9/11/2001</span>
									</p>
									<p className="w-full flex items-center justify-between text-xs gap-1">
										<span>Total amount</span>
										<span>₦350,000.00</span>
									</p>
								</div>

								<p className="border-b w-full text-center md:text-start py-[2rem]">
									You'll receive an order confirmation email shortly with
									details on tracking your purchase.
								</p>
								<p className="my-2 text-xs text-center">
									Have a Question?{" "}
									<a
										className=" font-semibold text-[#1c6328]"
										href="mailto:support@renergyhub.com"
										target="_blank"
									>
										support@renergyhub.com
									</a>
								</p>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="py-5 flex flex-row items-center justify-center sm:justify-center relative">
						<div className="absolute left-0 flex items-center justify-center gap-1 cursor-pointer font-semibold text-[#1c6328]">
							<Printer />
							<p>Print</p>
						</div>
						<Link to="/">
							<Button className="bg-[#00B207] rounded-sm text-xs hover:bg-[#00B207]">
								Continue shopping
							</Button>
						</Link>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</section>
	);
}

export default CheckoutSteps;
