export interface FormData {
	fullName: string;
	email: string;
	phoneNumber: string;
	country: string;
	streetAddress: string;
	city: string;
	state: string;
	postalCode?: string;
	shipping: string;
	payment: string;
	checkoutNote: string;
	checkoutTotalPrice: number;
}

export const formData: FormData = {
	fullName: "",
	email: "",
	phoneNumber: "",
	country: "",
	streetAddress: "",
	city: "",
	state: "",
	postalCode: "",
	shipping: "standard",
	payment: "card",
	checkoutNote: "",
	checkoutTotalPrice: 0,
};

export const updateFormData = (newData: Partial<FormData>): void => {
	Object.assign(formData, newData);
};
