
import { Button } from "./ui/button";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  street_address: string;
  state: string;
  post_code: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  street_address?: string;
  state?: string;
  post_code?: string;
}

interface DeliveryProps {
  next: () => void;
}

function Delivery(props: DeliveryProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
	country: "",
	street_address: "",
	state: "",
	post_code: ""

  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    console.log(data);
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
          {/* <p className="text-[10px] text-start mx-1 mt-1">
            <span className="text-[#6A6767]">Full Name </span>
          </p> */}
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
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
            )}
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
            {errors.phoneNumber && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.phoneNumber}
              </p>
            )}
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
		  <label className="text-[#6A6767]" htmlFor="country">
              Country <span className="text-[red]">*</span>
            </label>
            <input
              id="country"
              type="text"
              name="country"
			  value={formData.country}
			  onChange={handleChange}
              className="block w-full px-1 pb-1 rounded-md text-xs"
              required
            />
          </div>
          <div className="bg-white form-group rounded-md mb-2 ">
		  <label className="text-[#6A6767]" htmlFor="street_address">
              Street Address <span className="text-[red]">*</span>
            </label>
            <input
              id="street_address"
              type="text"
              name="street_address"
			  value={formData.street_address}
			  onChange={handleChange}
              className="block w-full px-1 pb-1 rounded-md text-xs"
              required
            />
          </div>
          <div className="bg-white form-group rounded-md mb-2 ">
		  <label className="text-[#6A6767]" htmlFor="state">
              State / Providence <span className="text-[red]">*</span>
            </label>
            <input
              id="state"
              type="text"
              name="state"
			  value={formData.state}
			  onChange={handleChange}
              className="block w-full px-1 pb-1 rounded-md text-xs"
              required
            />
          </div>
          <div className="bg-white form-group rounded-md mb-2 ">
		  <label className="text-[#6A6767]" htmlFor="post_code">
            Post Code <span className="text-[red]">*</span>
            </label>
            <input
              id="post_code"
              type="text"
              name="post_code"
			  value={formData.post_code}
			  onChange={handleChange}
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
            note that these charges, if applicable, are the responsibility of
            the customer.
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
