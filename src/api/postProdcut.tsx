import axios from 'axios';


export async function SubmitForm(formData: any, userId: number, categoryId: number,): Promise<void> {
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
    console.log(requestBody)

    // Send POST request with credentials (cookies) included
    const response = await axios.post('https://renergy-hub-express-backend.onrender.com/api/v1/products', requestBody, {
      
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      
    });

    console.log('Product submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting product:', error);
  }
}
