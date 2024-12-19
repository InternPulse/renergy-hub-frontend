import { Card, CardContent, CardFooter } from "./ui/card";
import cartItem from "../assets/checkout_sample_image.jpg";
import { useProductStore } from "../products-listing/store/store";
import { formData } from "../checkoutStore/store";
import { useEffect, useState } from "react";

function CartItems() {
	const { cartProducts } = useProductStore();
	const [subtotal, setSubtotal] = useState<number>(0);
	useEffect(() => {
		let temp = 0;
		cartProducts.forEach((i) => {
			temp = temp + Number(i.price) * Number(i.quantity);
		});
		setSubtotal(temp);
	}, []);

	const shippingFee = formData.shipping == "standard" ? 20000 : 50000;

	const total = subtotal + shippingFee;

	return (
		<section className="min-h-[100dvh] sm:w-[50dvw] w-[100%] flex flex-col gap-5 items-center p-[2rem] lg:p-[6rem] lg:ps-[3rem] md:p-[4rem] md:ps-[2rem]">
			<Card className="w-[80%] min-w-[270px] shadow-[#1C6328] drop-shadow-sm">
				{cartProducts.length === 0 ? (
					<CardContent className="p-4 text-center">
						Your cart is empty
					</CardContent>
				) : (
					cartProducts.map((product) => (
						<div key={product.id}>
							<CardContent className="p-4 pt-4 flex flex-col justify-evenly items-center">
								<img src={cartItem} alt="Cart Item" className="mb-6" />
								<p className="text-[16px] text-center">{product.name}</p>
							</CardContent>
							<CardFooter className="justify-center p-4 pt-0">
								<p className="text-[21px] text-center font-bold">
									₦{Number(product.price).toLocaleString()}{" "}
									{Number(product.quantity) > 1 && (
										<small className="font-light ms-1">
											x{Number(product.quantity)}
										</small>
									)}
								</p>
							</CardFooter>
						</div>
					))
				)}
			</Card>
			<div className="cart-total w-full">
				<p className="flex justify-between items-center w-full py-2 border-t border-[#E2E2E2]">
					<span className="text-sm">Subtotal</span>
					<span className="text-sm">₦{subtotal.toLocaleString()}</span>
				</p>
				<p className="flex justify-between items-center w-full py-2 border-b border-[#E2E2E2]">
					<span className="text-sm">Shipping fee</span>
					<span className="text-sm">₦{shippingFee.toLocaleString()}</span>
				</p>
				<p className="flex justify-between items-center w-full py-2">
					<span className="text-sm font-bold">Total</span>
					<span className="text-sm font-bold">₦{total.toLocaleString()}</span>
				</p>
			</div>
		</section>
	);
}

export default CartItems;
