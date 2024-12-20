// import { useState, FormEvent, ChangeEvent } from "react";

// interface FormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
// }

// function ContactForm() {
//   return (
//     <div className="w-full flex flex-col gap-3">
//       <p className="text-start text-md ">Contact Information</p>

//       <div className="bg-white form-group rounded-md mb-2 ">
//         <p className="text-[10px]  text-start mx-1 mt-1">
//           <span className="text-[#6A6767]">Full Name </span>
//           <span className="text-[red]">*</span>
//         </p>
//         <input
//           id="full_name"
//           type="text"
//           name="full_name"
//           className="block w-full px-1 pb-1 rounded-md text-xs"
//           required
//         />
//       </div>
//       <div>
//         <div className="bg-white form-group rounded-md my-1 ">
//           <p className="text-[10px] text-start mx-1 mt-1">
//             <span className="text-[#6A6767]">Email Address </span>
//             <span className="text-[red]">*</span>
//           </p>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             className="block w-full px-1 pb-1 rounded-md text-xs"
//             required
//           />
//         </div>
//         <p className="text-[10px] text-start font-semibold">
//           For order and confirmation updates.
//         </p>
//       </div>
//       <div className="my-2">
//         <div className="bg-white form-group rounded-md my-1 ">
//           <p className="text-[10px] text-start mx-1 mt-1">
//             <span className="text-[#6A6767]">Phone Number </span>
//             <span className="text-[red]">*</span>
//           </p>
//           <input
//             id="phone_number"
//             type="number"
//             name="phone_number"
//             className="block w-full px-1 pb-1 rounded-md text-xs"
//             required
//           />
//         </div>
//         <p className="text-[10px] text-start font-semibold">
//           For delivery updates.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;

import { useState, ChangeEvent } from "react";

interface FormData {
	fullName: string;
	email: string;
	phoneNumber: string;
}

interface FormErrors {
	fullName?: string;
	email?: string;
	phoneNumber?: string;
}

const ContactForm = () => {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		phoneNumber: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setErrors((prev) => ({...prev, [name]: "" })); 
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	//   const handleSubmit = async (e: FormEvent) => {
	//     e.preventDefault();

	return (
		<div>
			<div className="w-full flex flex-col gap-3">
				<p className="text-start text-md">Contact Information</p>

				<div className="bg-white form-group rounded-md mb-2">
					<label className="text-[#6A6767]" htmlFor="fullName">
						Full Name <span className="text-[red]">*</span>
					</label>
					<input
						id="fullName"
						type="text"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						className="block w-full px-1 pb-1 rounded-md text-xs"
						required
					/>
					{errors.fullName && (
						<p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>
					)}
				</div>

				<div>
					<div className="bg-white form-group rounded-md my-1">
						<label className="text-[#6A6767]" htmlFor="email">
							Email Address <span className="text-[red]">*</span>
						</label>
						<input
							id="email"
							type="email"
							name="email"
							value={formData.email}
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
						<label className="text-[#6A6767]" htmlFor="phoneNumber">
							Phone Number <span className="text-[red]">*</span>
						</label>
						<input
							id="phoneNumber"
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
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
		</div>
	);
};

export default ContactForm;
