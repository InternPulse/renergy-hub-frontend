import { Card, CardContent, CardFooter } from "./ui/card";
import cartItem from "../assets/checkout_sample_image.jpg";
function CartItems() {
	return (
		<section className="min-h-[100dvh] sm:w-[50dvw] w-[100%] flex flex-col gap-5 items-center p-[2rem] lg:p-[6rem] lg:ps-[3rem] md:p-[4rem] md:ps-[2rem]">
			<Card className=" w-[80%] min-w-[270px] shadow-[#1C6328] drop-shadow-sm">
				<CardContent className="p-4 pt-4 flex flex-col justify-evenly items-center">
					<img src={cartItem} alt="Cart Item" className="mb-6" />
					<p className="text-[16px] text-center ">Fireman 380W Solar Panel</p>
				</CardContent>
				<CardFooter className="justify-center p-4 pt-0">
					<p className="text-[21px] text-center font-bold">₦350,000.00</p>
				</CardFooter>
			</Card>
			<div className="cart-total w-full">
				<p className="flex justify-between items-center w-full py-2 border-t border-[#E2E2E2]">
					<span className="text-sm">Subtotal</span>
					<span className="text-sm">₦350,000.00</span>
				</p>
				<p className="flex justify-between items-center w-full py-2 border-b border-[#E2E2E2]">
					<span className="text-sm">Shipping fee</span>
					<span className="text-sm">₦20,000.00</span>
				</p>
				<p className="flex justify-between items-center w-full py-2">
					<span className="text-sm font-bold">Total</span>
					<span className="text-sm font-bold">₦370,000.00</span>
				</p>
			</div>
		</section>
	);
}

export default CartItems;
