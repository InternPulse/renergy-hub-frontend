import { useState } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";

function CheckoutSteps() {
	const [step, setStep] = useState<number>(2);
	function nextStep() {
		setStep(step + 1);
	}
	function previousStep() {
		setStep(step - 1);
	}
	return (
		<section className="bg-[#EDF2EE] min-h-[100dvh] sm:w-[50dvw] w-[100%] p-[2rem] lg:p-[4rem] sm:p-[3rem] flex items-center flex-col gap-5">
			<div className="w-full checkout-progress-bar flex justify-center items-center flex-col">
				<div className=" w-[90%] max-w-[457px] ">
					<div className="flex justify-evenly items-center">
						<div className="progress-point active rounded-full"></div>
						<span className="progress-connector grow p-[0.1rem]"></span>
						<div className="progress-point rounded-full"></div>
						<span className="progress-connector grow p-[0.1rem]"></span>
						<div className="progress-point rounded-full"></div>
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
		</section>
	);
}

export default CheckoutSteps;
