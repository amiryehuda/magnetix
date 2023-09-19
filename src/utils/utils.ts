import axios from "axios";

export const sendTextToMidjourney = async (text: string, apiKey: string) => {
  try {
    const response = await axios.post(
      "https://api.midjourney.com/v1/your-endpoint", // Replace with the actual API endpoint
      {
        text,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Replace with your API key
          "Content-Type": "application/json",
        },
      }
    );

    // Assuming the API returns a URL to the generated picture, you can access it from response.data
    const generatedPictureUrl = response.data.pictureUrl;
    return generatedPictureUrl;
  } catch (error) {
    console.error("Error sending text to Midjourney API:", error);
    throw error;
  }
};
