import axios from "axios";

// export const sendTextToMidjourney = async (text: string, apiKey: string) => {
//   try {
//     const response = await axios.post(
//       "https://api.midjourney.com/v1/your-endpoint", // Replace with the actual API endpoint
//       {
//         text,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${apiKey}`, // Replace with your API key
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Assuming the API returns a URL to the generated picture, you can access it from response.data
//     const generatedPictureUrl = response.data.pictureUrl;
//     return generatedPictureUrl;
//   } catch (error) {
//     console.error("Error sending text to Midjourney API:", error);
//     throw error;
//   }
// };

// after sending get request this is the responses

// {
//     "progress": 0,
//     "response": {}
// }

// {
//     "progress": 31,
//     "progressImageUrl": "https://cdn.discordapp.com/attachments/1153358180429070356/1154350823397150782/5545fc38-0922-45f4-9f99-6909ff74f645_grid_0.webp",
//     "response": {}
// }

// {
//     "progress": 100,
//     "response": {
//         "accountId": "8i9uNrIBepwOhGyYNEMY",
//         "createdAt": "2023-09-21T09:38:18.161Z",
//         "originatingMessageId": "khye3DU1shFFUaHG9G6J",
//         "ref": "",
//         "buttons": [
//             "U1",
//             "U2",
//             "U3",
//             "U4",
//             "🔄",
//             "V1",
//             "V2",
//             "V3",
//             "V4"
//         ],
//         "imageUrl": "https://cdn.discordapp.com/attachments/1153358180429070356/1154350885997121546/amir_yehuda_a_yaman_girl_dance_5545fc38-0922-45f4-9f99-6909ff74f645.png",
//         "imageUrls": [
//             "https://cdn.midjourney.com/5545fc38-0922-45f4-9f99-6909ff74f645/0_0.png",
//             "https://cdn.midjourney.com/5545fc38-0922-45f4-9f99-6909ff74f645/0_1.png",
//             "https://cdn.midjourney.com/5545fc38-0922-45f4-9f99-6909ff74f645/0_2.png",
//             "https://cdn.midjourney.com/5545fc38-0922-45f4-9f99-6909ff74f645/0_3.png"
//         ],
//         "responseAt": "2023-09-21T09:38:18.402Z",
//         "description": "",
//         "type": "imagine",
//         "content": "a yaman girl dance",
//         "buttonMessageId": "EHfmoH9EXzw17KWtBqr3"
//     }
// }