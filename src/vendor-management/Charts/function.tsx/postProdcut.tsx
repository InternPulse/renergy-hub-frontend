import axios from 'axios';
interface FormData {
  productName: string;
  description: string;
  price: number | null;
  image: File | null;
  status: string;
  rating: number;
}

export async function SubmitForm(formData: FormData, userId: number, categoryId: number): Promise<void> {
  try {
    // Modify the form data to match the expected format
    const requestBody = {
      categoryId,
      userId,
      name: formData.productName,
      description: formData.description,
      price: formData.price,
      stock: 10, 
      image: formData.image,
    };

    const response = await axios.post('https://renergy-hub-express-backend.onrender.com/api/v1/products', requestBody, {
      withCredentials:true,
      headers: {
        
        'Content-Type': 'application/json',
      },
    
    });

    console.log('Product submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting product:', error);
  }
}

// Example usage
// const formData: FormData = {
//   productName: 'Gregco Power Solar Monitoring Kit',
//   description: 'The Gregco Power Solar Monitoring Kit enables real-time tracking of your solar system’s performance.',
//   price: 19999,
//   image: 'imageUrl8',
//   status: 'available',
//   rating: 5,
// };

// const userId = 4;
// const categoryId = 1;

// SubmitForm(formData, userId, categoryId);
