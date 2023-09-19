const BASE_URL = "https://api.thenextleg.io/v2";
const AUTH_TOKEN = "";
const AUTH_HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

/**
 * A function to pause for a given amount of time
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Continue polling a generation an image is completed, or fails.
 * You can also use a webhook to get notified when the image is ready.
 * It will contain the same response body as seen here.
 */
const fetchToCompletion = async (messageId, retryCount, maxRetry = 20) => {
  const imageRes = await fetch(`${BASE_URL}/message/${messageId}`, {
    method: "GET",
    headers: AUTH_HEADERS,
  });

  const imageResponseData = await imageRes.json();

  if (imageResponseData.progress === 100) {
    return imageResponseData;
  }

  if (imageResponseData.progress === "incomplete") {
    throw new Error("Image generation failed");
  }

  if (retryCount > maxRetry) {
    throw new Error("Max retries exceeded");
  }

  if (imageResponseData.progress && imageResponseData.progressImageUrl) {
    console.log("---------------------");
    console.log(`Progress: ${imageResponseData.progress}%`);
    console.log(`Progress Image Url: ${imageResponseData.progressImageUrl}`);
    console.log("---------------------");
  }

  await sleep(5000);
  return fetchToCompletion(messageId, retryCount + 1);
};

// we wrap it in a main function here so we can use async/await inside of it.
async function main(
  prompt = "A Rhinoceros in the Amazon with sun shining through, photorealistic, 4k"
) {
  /**
   * GENERATE THE IMAGE
   */
  const imageRes = await fetch(`${BASE_URL}/imagine`, {
    method: "POST",
    headers: AUTH_HEADERS,

    body: JSON.stringify({ msg: prompt }),
  });

  const imageResponseData = await imageRes.json();
  console.log("\n=====================");
  console.log("IMAGE GENERATION MESSAGE DATA");
  console.log(imageResponseData);
  console.log("=====================");

  const completedImageData = await fetchToCompletion(
    imageResponseData.messageId,
    0
  );

  console.log("\n=====================");
  console.log("COMPLETED IMAGE DATA");
  console.log(completedImageData);
  console.log("=====================");

  /**
   * INVOKE A VARIATION
   */
  const variationRes = await fetch(`${BASE_URL}/button`, {
    method: "POST",
    headers: AUTH_HEADERS,
    body: JSON.stringify({
      button: "V1",
      buttonMessageId: completedImageData.response.buttonMessageId,
    }),
  });

  const variationResponseData = await variationRes.json();
  console.log("\n=====================");
  console.log("IMAGE VARIATION MESSAGE DATA");
  console.log(variationResponseData);
  console.log("=====================");

  const completedVariationData = await fetchToCompletion(
    variationResponseData.messageId,
    0
  );

  console.log("\n=====================");
  console.log("COMPLETED VARIATION DATA");
  console.log(completedVariationData);
  console.log("=====================");
}

main();
