'use client'
import axios from "axios"
import Tesseract from "tesseract.js";
 const Log = async(text) => {
console.log('got here')
  try {
    const response = await axios("https://nlpbackend-vmje.onrender.com/chat", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({ message: text }),
    });
    if (response?.data) {
      console.log('shanu mii', response.data)
      const mydata = response.data
      return mydata
    }

  }
  catch (error) {
    console.error(error)
    throw error
    
  }

}

export const handleFileSelection = async (files) => {
  const selectedFile = files[0]; // Get the first selected file

  if (selectedFile) {
    console.log('Selected file:', selectedFile.name);
    console.log('File type:', selectedFile.type);

    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile); // Convert image to data URL for preview

      const imageUrlPromise = new Promise((resolve, reject) => {
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          resolve(imageUrl);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });

      try {
        const imageUrl = await imageUrlPromise; // Wait for image URL

        const { data: { text } } = await Tesseract.recognize(imageUrl, 'eng',{ logger: (m) => console.log(m.progress) });
        console.log('Recognized text:', text);

        return {
          success: true,
          data: text,
        };
      } catch (error) {
        console.error('Error recognizing text:', error);
        return {
          success: false,
          data: null,
        };
      }
    }
  }
};

export default Log