import { Button } from "./ui/button";
import { useState } from "react";
import { formData, updateFormData } from "../checkoutStore/store";

interface DeliveryProps {
	next: () => void;
}

function Delivery(props: DeliveryProps) {
	const [localFormData, setLocalFormData] = useState(formData);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLocalFormData({ ...localFormData, [name]: value });
		updateFormData(localFormData);
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		setLocalFormData({
			...localFormData,
			shipping: String(data.shipping),
		});
		updateFormData(localFormData);
		props.next();
	}
	return (
		<form className="w-full flex flex-col gap-5 mt-7" onSubmit={handleSubmit}>
			<h1 className="text-2xl text-center md:text-start font-semibold">
				Enter Delivery Information
			</h1>
			<div className="w-full flex flex-col gap-3">
				<p className="text-start text-md">Contact Information</p>

				<div className="bg-white form-group rounded-md mb-2">
					<label
						className="text-[#6A6767] text-xs mx-1 mt-1"
						htmlFor="fullName"
					>
						Full Name <span className="text-[red]">*</span>
					</label>
					<input
						id="fullName"
						type="text"
						name="fullName"
						value={localFormData.fullName}
						onChange={handleChange}
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>

				<div>
					<div className="bg-white form-group rounded-md my-1">
						<label className="text-[#6A6767] text-xs mx-1 mt-1" htmlFor="email">
							Email Address <span className="text-[red]">*</span>
						</label>
						<input
							id="email"
							type="email"
							name="email"
							value={localFormData.email}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<p className="text-[10px] text-start font-semibold">
						For order and confirmation updates.
					</p>
				</div>

				<div className="my-2">
					<div className="bg-white form-group rounded-md my-1">
						<label
							className="text-[#6A6767] text-xs mx-1 mt-1"
							htmlFor="phoneNumber"
						>
							Phone Number <span className="text-[red]">*</span>
						</label>
						<input
							id="phoneNumber"
							type="number"
							name="phoneNumber"
							value={localFormData.phoneNumber}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<p className="text-[10px] text-start font-semibold">
						For delivery updates.
					</p>
				</div>
			</div>

			<div className="w-full flex flex-col gap-4">
				<div className="w-full flex flex-col gap-3">
					<p className="text-start text-md ">Shipping Address</p>

					<div className="bg-white form-group rounded-md mb-2 ">
						<label
							className="text-[#6A6767] text-xs mx-1 mt-1"
							htmlFor="streetAddress"
						>
							Street Address <span className="text-[red]">*</span>
						</label>
						<input
							id="streetAddress"
							type="text"
							name="streetAddress"
							value={localFormData.streetAddress}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<div className="bg-white form-group rounded-md mb-2 ">
						<label className="text-[#6A6767] text-xs mx-1 mt-1" htmlFor="city">
							City <span className="text-[red]">*</span>
						</label>
						<input
							id="city"
							type="text"
							name="city"
							value={localFormData.city}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<div className="bg-white form-group rounded-md mb-2 ">
						<label className="text-[#6A6767] text-xs mx-1 mt-1" htmlFor="state">
							State / Province <span className="text-[red]">*</span>
						</label>
						<input
							id="state"
							type="text"
							name="state"
							value={localFormData.state}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<div className="bg-white form-group rounded-md mb-2 ">
						<label
							className="text-[#6A6767] text-xs mx-1 mt-1"
							htmlFor="country"
						>
							Country <span className="text-[red]">*</span>
						</label>
						<input
							id="country"
							type="text"
							name="country"
							value={localFormData.country}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
							required
						/>
					</div>
					<div className="bg-white form-group rounded-md mb-2 ">
						<label
							className="text-[#6A6767] text-xs mx-1 mt-1"
							htmlFor="postalCode"
						>
							Post Code
						</label>
						<input
							id="postalCode"
							type="text"
							name="postalCode"
							value={localFormData.postalCode}
							onChange={handleChange}
							className="block w-full px-1 pb-1 rounded-md text-xs"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-3">
					<p className="text-start text-md">Shipping Options</p>
					<p className="text-[10px] text-start ">
						International shipments, including Canada, may be subject to customs
						charges, import tax, VAT, or duties upon arrival at customs. Please
						note that these charges, if applicable, are the responsibility of
						the customer.
					</p>

					<div className="w-full">
						<div className="w-full flex items-center justify-between p-2 border-x border-t border-b-[0.6px] rounded-t-md border-[#E2E2E2]">
							<div className="radio-container">
								<input
									type="radio"
									id="standard"
									name="shipping"
									value="standard"
									className="radio-input"
									checked={localFormData.shipping == "standard"}
									onChange={handleChange}
								/>
								<label
									htmlFor="standard"
									className="radio-label text-xs text-start"
								>
									Shipping - FedEx Standard (2 days)
								</label>
							</div>
							<p className="text-xs text-start font-medium">₦20,000</p>
						</div>
						<div className="w-full p-2 flex items-center justify-between border-x border-b border-t-[0.6px] rounded-b-md border-[#E2E2E2]">
							<div className="radio-container">
								<input
									type="radio"
									id="overnight"
									name="shipping"
									value="overnight"
									className="radio-input"
									checked={localFormData.shipping == "overnight"}
									onChange={handleChange}
								/>
								<label
									htmlFor="overnight"
									className="radio-label text-xs text-start"
								>
									Shipping - FedEx Overnight
								</label>
							</div>
							<p className="text-xs text-start font-medium">₦50,000</p>
						</div>
					</div>
				</div>
			</div>
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
