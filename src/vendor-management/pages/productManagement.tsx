import { useState, ChangeEvent } from "react";
import Navbar from "../header/navigation";
import { SubmitForm } from "../../api/postProdcut";
import { useProductStore } from "../../products-listing/store/store";
// import { useLocation } from "react-router-dom";
interface ProductManagementType {
  productName: string;
  description: string;
  price: number | null;
  image: File | null;
  status: string;
  rating: number;
}

const ProductManagement: React.FC = () => {
  
  const [productData, setProductData] = useState<ProductManagementType>({
    productName: "",
    description: "",
    price: null,
    image: null,
    status: "status",
    rating: 0,
  });

  const {userId}= useProductStore()
  // const location = useLocation();
  // const { userId } = location.state || {};
  // textarea
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safely access the first file
    if (file) {
      setProductData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleRating = (value: number) => {
    setProductData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    // Submit the data to your backend or API
    
    SubmitForm(productData,userId,1)
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
          className="bg-white rounded-md p-4 flex flex-col gap-[1rem]"
        >
          <h2 className="font-[500] text-[22px]">Product Information</h2>
          <p className="flex gap-8 ">
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
                placeholder="₦"
                className="border border-[#565656] rounded-lg p-2 w-full outline-none mt-1"
              />
            </div>
          </p>

          <div>
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
          <div>
            <label className="text-[#565656] font-[500]">Add Image</label>
            <p className="text-[#565656] font-[400] text-sm">
              First picture is the title picture
            </p>
          </div>
          {/* <div className="">
              <input
                type="file"
                id="edit-image"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="logo-upload"
                className="text-[#007300] underline mt-2 hover:text-[#00A100] cursor-pointer"
              >
                Edit Image
              </label>
            </div> */}

          <div className="flex gap-10">
            <div className="w-[50%] border p-6 rounded-lg">
              <input
                type="file"
                onChange={handleImageUpload}
                id="file-upload"
                className="hidden"
              />
              <label className="text-[#565656]" htmlFor="file-upload">
                <span className="underline  font-[500]">Click to Upload</span>{" "}
              </label>
              <span className="text-[#565656]">
                or drag and drop SVG,PNG,JPG or GIF [max 800 x 400px]
              </span>
              <p>
                {productData.image
                  ? productData.image.name
                  : "No image selected"}
              </p>
            </div>
            <div className="w-[25%]">
              <label>Product Status:</label>
              <select
                name="status"
                value={productData.status}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", margin: "5px 0" }}
              >
                <option value="status">status</option>
                <option value="available">Available</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </div>
            <div className="w-[25%]">
              <label>Product Rating:</label>
              <div style={{ display: "flex", gap: "5px" }}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRating(value)}
                    style={{
                      cursor: "pointer",
                      color: productData.rating >= value ? "#2C7427" : "gray",
                      fontSize: "24px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
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
};

export default ProductManagement;
