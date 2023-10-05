import axios from "axios";
import { BASE_URL, AUTH_TOKEN, AUTH_HEADERS } from "../assets/utils";

export const sendTextToMidjourney = async (text: string) => {
  try {
    const response = await axios.post(
      BASE_URL,
      { cmd: "imagine", msg: text },
      {
        headers: AUTH_HEADERS,
      }
    );

    const generatedPictureUrl = response.data;
    return generatedPictureUrl;
  } catch (error) {
    console.error("Error sending text to Midjourney API:", error);
    throw error;
  }
};

export const getPictures = async (messageId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/message/${messageId}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error get request getPictures:", error);
    throw error;
  }
};

export const chooseOnVersionButton = async (
  buttonMessageId: string,
  button: string
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/button`,
      {
        button: button,
        buttonMessageId: buttonMessageId,
      },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error post request button VersionButton:", error);
    throw error;
  }
};

// export const chooseOnVersionButton = async (buttonMessageId: string) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/button/?authToken=${AUTH_TOKEN}&buttonMessageId=${buttonMessageId}&button=<button>`,
//       {
//         headers: {
//           Authorization: `Bearer ${AUTH_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error get request VersionButton:", error);
//     throw error;
//   }
// };
