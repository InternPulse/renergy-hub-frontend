import { Card } from "./ui/card";
import Visa from "../assets/checkout-icons/Visa.svg";
import Mastercard from "../assets/checkout-icons/Mastercard.svg";
import BankTransfer from "../assets/checkout-icons/BankTransfer.svg";
// import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import Item from "../assets/checkout_sample_image.jpg";
import { useEffect, useState } from "react";
import { useProductStore } from "../products-listing/store/store";
import { formData, updateFormData } from "../checkoutStore/store";

function Review(props: any) {
	const [localFormData, setLocalFormData] = useState(formData);
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setLocalFormData({ ...localFormData, [name]: value });
		updateFormData(localFormData);
	};
	const { cartProducts } = useProductStore();
	const subtotal = cartProducts.reduce(
		(total, product) => total + parseFloat(product.price),
		0
	);
	async function startPayment() {
		try {
			const res = await fetch(
				"https://renergy-hub-express-backend.onrender.com/api/v1/products",
				{
					method: "POST",
					body: JSON.stringify({
						orderId: 1,
						method: "ONLINE",
						callbackUrl: "https://renergyhub.com.ng",
					}),
				}
			);
			const products = await res.json();
			console.log(products);
		} catch (err) {
			console.log(err);
		}
	}
	const shippingFee = formData.shipping == "standard" ? 20000 : 50000;

	const total = subtotal + shippingFee;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="w-full">
			<h1 className="text-2xl artificial-overflow text-center sm:text-start font-semibold">
				Please confirm and submit order
			</h1>
			<div className="artificial-overflow justify-between flex items-center sm:items-stretch flex-col md:flex-row gap-[3rem] mt-7 lg:pe-[4rem] sm:pe-[3rem]">
				<div className="w-full flex flex-col gap-5">
					<div className="w-full flex flex-col gap-3">
						<p className="text-start font-semibold text-md">
							Delivery and payment
						</p>
						<Card className="p-4 shadow-[#1C6328] drop-shadow-sm min-h-[230px] flex items-center">
							<div className="flex max-[435px]:flex-col justify-between items-stretch w-full gap-4 h-full">
								<div className="flex flex-col justify-between items-start  min-[436px]:w-[50%]">
									<p className="text-xs font-semibold mb-2">
										Delivery address{" "}
									</p>
									<p className="flex flex-col items-start">
										<span className="text-sm">{formData.fullName}</span>
										<span className="text-start text-sm">
											{formData.streetAddress}, {formData.city},{" "}
											{formData.state}, {formData.country}
										</span>
										{formData.postalCode && (
											<span className=" text-start text-sm">
												Postal Code: {formData.postalCode}
											</span>
										)}
									</p>
									<p
										onClick={() => {
											props.toHome();
										}}
										className="my-3 text-xs text-[#1C6328] hover:underline font-semibold cursor-pointer"
									>
										Change
									</p>
								</div>
								<div className="flex flex-col items-start justify-between min-[436px]:w-[50%]">
									<p className="text-xs font-semibold mb-2 text-start ">
										Payment method
									</p>
									<div className="flex flex-row max-[435px]:flex-row justify-between gap-2 items-center">
										{formData.payment == "card" && (
											<div>
												<div className="flex items-center gap-2">
													<img src={Visa} alt="Payment Method" width={45} />
													<img
														src={Mastercard}
														alt="Payment Method"
														width={45}
													/>
												</div>
												<div>
													{/*flex items-center
                       <span className="text-start text-sm">
												**** **** **** 0892
											</span>
											<span className="text-start text-sm">Exp: 08/2024</span> */}
													<span className="text-start text-sm">
														Card Payment
													</span>
												</div>
											</div>
										)}

										{formData.payment == "bank_transfer" && (
											<div className="flex items-center gap-2">
												<img
													src={BankTransfer}
													alt="Payment Method"
													width={65}
												/>
												<span className="text-start text-sm">
													Bank Transfer
												</span>
											</div>
										)}
									</div>
									<p
										onClick={() => {
											props.back();
										}}
										className="my-3 text-xs text-[#1C6328] font-semibold hover:underline cursor-pointer"
									>
										Change
									</p>
								</div>
							</div>
						</Card>
						{/* <div className="flex justify-start items-center">
							<p
								className="flex text-start cursor-pointer lg:gap-2 gap-1 items-center text-xs text-[#1C6328]"
								onClick={props.back}
							>
								{" "}
								<ChevronLeft className="h-4a w-4" /> Return to payment
							</p>
						</div> */}
					</div>
				</div>
				<section className="w-full flex flex-col justify-between gap-5 ">
					<div className="w-full flex flex-col gap-3">
						<p className="text-start font-semibold text-md">Order Summary</p>
						<div className="w-full">
							<p className="flex justify-between items-center w-full py-2 ">
								<span className="text-sm">Item(s) total</span>
								<span className="text-sm">₦{subtotal.toLocaleString()}</span>
							</p>
							<p className="flex justify-between items-center w-full py-2 ">
								<span className="text-sm">Shipping fee</span>
								<span className="text-sm">₦{shippingFee.toLocaleString()}</span>
							</p>
							<p className="flex justify-between items-center w-full py-2 border-b border-[#E2E2E2]">
								<span className="text-sm">Shop discount</span>
								<span className="text-sm">₦0.00</span>
							</p>
							<p className="flex justify-between items-center w-full py-2">
								<span className="text-sm font-bold">Order total</span>
								<span className="text-sm font-bold">
									₦{total.toLocaleString()}
								</span>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Button
							className="w-full bg-[#00B207] hover:bg-[#00B207] text-white text-xs rounded-sm"
							onClick={() => {
								updateFormData({ checkoutTotalPrice: total });
								startPayment();
								props.next();
							}}
							// onClick={}
						>
							Submit order
						</Button>
						<p className="text-xs text-[#6f6f6f]">
							By clicking Submit order, you agree to Renergy Hub's{" "}
							<span className="underline cursor-pointer text-[#1c6328]">
								Terms of Use
							</span>{" "}
							and{" "}
							<span className="underline cursor-pointer text-[#1c6328]">
								Privacy Policy
							</span>
							.
						</p>
					</div>
				</section>
			</div>
			<div className="artificial-overflow lg:me-[4rem] sm:pe-[3rem] ">
				<div className="mt-7 border-[#1C6328A8] bg-[#EDF2EE] p-4 border rounded-md w-full flex justify-center">
					<div className="flex flex-col gap-5 w-full">
						<p className="text-center sm:text-start md:text-start text-sm font-bold">
							Order details
						</p>
						{cartProducts.map((product) => (
							<div className="flex justify-between gap-2">
								<img src={Item} className="h-[100px]" alt="Order Item" />
								<div className="flex flex-col gap-2 flex-grow">
									<p className="flex items-center justify-between text-xs gap-2">
										<span className="font-semibold">Item</span>
										<span className="text-end">{product.name}</span>
									</p>
									<p className="flex items-center justify-between text-xs gap-2">
										<span className="font-semibold">Price</span>
										<span className="text-end">
											₦{Number(product.price).toLocaleString()}
										</span>
									</p>
									<p className="flex items-center justify-between text-xs gap-2">
										<span className="font-semibold">Quantity</span>
										<span className="text-end">
											{Number(product.quantity).toLocaleString()}
										</span>
									</p>
									<p className="flex items-center justify-between text-xs gap-2 font-bold">
										<span>Sub total</span>
										<span className="text-end">
											₦
											{(
												Number(product.quantity) * Number(product.price)
											).toLocaleString()}
										</span>
									</p>
								</div>
							</div>
						))}

						<div>
							<p className="text-sm text-center sm:text-start md:text-start">
								Add a note to the seller{" "}
								<span className="text-[#1C6328A8]">(Optional)</span>
							</p>
							<textarea
								className="w-full mt-2 p-1 outline-none text-sm rounded-sm border border-[#1C6328A8] note-to-seller"
								onChange={handleChange}
								name="checkoutNote"
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Review;
