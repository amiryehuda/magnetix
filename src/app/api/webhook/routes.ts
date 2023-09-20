import axios from "axios";
import { BASE_URL, AUTH_TOKEN, AUTH_HEADERS } from "../assets/utils";

export const sendTextToMidjourney = async (text: string) => {
  try {
    const response = await axios.post(
      BASE_URL, // Replace with the actual API endpoint
      { cmd: "imagine", msg: text },
      {
        headers: AUTH_HEADERS,
      }
    );

    // Assuming the API returns a URL to the generated picture, you can access it from response.data
    // const generatedPictureUrl = response.data.pictureUrl;
    const generatedPictureUrl = response.data;
    return generatedPictureUrl;
  } catch (error) {
    console.error("Error sending text to Midjourney API:", error);
    throw error;
  }
};

export const getPictures = async (messageId: string) => {
  // var config = {
  //   method: "get",
  //   url: `${BASE_URL}/message/${messageId}`,
  //   headers: {
  //     Authorization: `Bearer ${AUTH_TOKEN}`,
  //   },
  // };

  try {
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const response = await axios.get(`${BASE_URL}/message/${messageId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error get request:", error);
    throw error;
  }
};

export const pressOnVersionButton = async (buttonMessageId: string) => {
  const response = await axios.get(`${BASE_URL}/button/${buttonMessageId}`);
};
