function ContactForm() {
	return (
		<div className="w-full flex flex-col gap-3">
			<p className="text-start text-md ">Contact Information</p>

			<div className="bg-white form-group rounded-md mb-2 ">
				<p className="text-[10px]  text-start mx-1 mt-1">
					<span className="text-[#6A6767]">Full Name </span>
					<span className="text-[red]">*</span>
				</p>
				<input
					id="full_name"
					type="text"
					name="full_name"
					className="block w-full px-1 pb-1 rounded-md text-xs"
					required
				/>
			</div>
			<div>
				<div className="bg-white form-group rounded-md my-1 ">
					<p className="text-[10px] text-start mx-1 mt-1">
						<span className="text-[#6A6767]">Email Address </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="email"
						type="email"
						name="email"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
				<p className="text-[10px] text-start font-semibold">
					For order and confirmation updates.
				</p>
			</div>
			<div className="my-2">
				<div className="bg-white form-group rounded-md my-1 ">
					<p className="text-[10px] text-start mx-1 mt-1">
						<span className="text-[#6A6767]">Phone Number </span>
						<span className="text-[red]">*</span>
					</p>
					<input
						id="phone_number"
						type="number"
						name="phone_number"
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
				</div>
				<p className="text-[10px] text-start font-semibold">
					For delivery updates.
				</p>
			</div>
		</div>
	);
}

export default ContactForm;
