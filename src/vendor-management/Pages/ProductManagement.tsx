import { useState } from "react";
import Navbar from "../header/Navigation";
interface ProductManagementType {
  productName: string;

  description: string;
  price: number | null;
}

function ProductManagement() {
  const [productData, setProductData] = useState<ProductManagementType>({
    productName: "",
    description: "",
    price: null,
  });

  // textarea
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    // Submit the data to your backend or API
  };

  // textarea

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/); // Split text by whitespace
    if (words.length <= 1000) {
      setProductData({ ...productData, description: text });
      setWordCount(words.length);
    }
  };
  return (
    <>
      <Navbar />
      <section className="p-6">
        <div className="bg-white px-4 py-2 mb-4 rounded-[6px]">
          <div>
            <h1 className="text-3xl mb-2">Product Management</h1>
          </div>

          <p className="text-[#565656] font-400 mb-2 ">
            In Product management section, you can manage products with their
            details. you can input product informations as Product image,
            pricing,
            <br /> description, Product status.
          </p>
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="bg-white rounded-md p-4 mb-4"
        >
          <h2 className="font-[500] text-[22px]">Product Information</h2>
          <p className="flex gap-8 mt-4">
            <div className="w-full">
              <label htmlFor="name" className="text-[#565656] font-[500] ">
                Product name
              </label>
              <input
                type="text"
                id="name"
                name="productName"
                value={productData.productName}
                onChange={handleInputChange}
                className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                placeholder="Enter full name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name" className="text-[#565656] font-[500]">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={productData.price || ""}
                onChange={handleInputChange}
                className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
                placeholder="Enter phone number"
              />
            </div>
          </p>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                htmlFor="Business  Description"
                className="font-[500] text-[#565656]"
              >
                Business Description
              </label>
              <p className="text-[#565656] text-sm">{wordCount}/1000 words</p>
            </div>

            <textarea
              name="description"
              id="description"
              placeholder="Write about your company"
              value={productData.description}
              onChange={handleTextareaChange}
              maxLength={10000}
              className="border border-[#565656] rounded-lg px-2 py-2 w-full outline-none mt-1 resize-none h-[100px]"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="border bg-[#2C7427] px-10 py-2 rounded-md text-white text-xl font-[400] mt-2"
              type="submit"
            >
              Post Product
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ProductManagement;
