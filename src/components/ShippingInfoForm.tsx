function ShippingForm() {
	return (
		<div className="w-full flex flex-col gap-4">
			<div className="w-full flex flex-col gap-3">
				<p className="text-start text-md ">Shipping Address</p>

				<div className="bg-white form-group rounded-md mb-2 ">
					<p className="text-[10px]  text-start mx-1 mt-1">
						<span className="text-[#6A6767]">Country </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="country"
						type="text"
						name="country"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
				<div className="bg-white form-group rounded-md mb-2 ">
					<p className="text-[10px]  text-start mx-1 mt-1">
						<span className="text-[#6A6767]">Street Address </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="street_address"
						type="text"
						name="street_address"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
				<div className="bg-white form-group rounded-md mb-2 ">
					<p className="text-[10px]  text-start mx-1 mt-1">
						<span className="text-[#6A6767]">State/Province </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="state"
						type="text"
						name="state"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
				<div className="bg-white form-group rounded-md mb-2 ">
					<p className="text-[10px] text-start mx-1 mt-1">
						<span className="text-[#6A6767]">Post Code </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="post_code"
						type="text"
						name="post_code"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-3">
				<p className="text-start text-md">Shipping Options</p>
				<p className="text-[10px] text-start ">
					International shipments, including Canada, may be subject to customs
					charges, import tax, VAT, or duties upon arrival at customs. Please
					note that these charges, if applicable, are the responsibility of the
					customer.
				</p>

				<div className="w-full">
					<div className="w-full flex items-center justify-between p-2 border-x border-t border-b-[0.6px] rounded-t-md border-[#E2E2E2]">
						<div className="radio-container">
							<input
								type="radio"
								id="standard"
								name="shipping_option"
								value="standard"
								className="radio-input"
								defaultChecked
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
								name="shipping_option"
								value="overnight"
								className="radio-input"
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
	);
}

export default ShippingForm;
