import axios from "axios";
import { BASE_URL, AUTH_TOKEN, AUTH_HEADERS } from "../assets/utils";

export const sendTextToMidjourney = async (text: string) => {
  try {
    const response = await axios.post(
      BASE_URL, // Replace with the actual API endpoint
      {
        text,
      },
      {
        headers: AUTH_HEADERS,
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
