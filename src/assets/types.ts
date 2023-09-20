export interface Response {
  success: boolean;
  messageId: string;
  createdAt: Date;
}

export interface Response {
  reaction: string;
  buttonMessageId: string;
}

const BASE_URL = "https://api.thenextleg.io/v2";
const AUTH_TOKEN = "";
const AUTH_HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

export interface PhotoType {
  id: number;
  image_url: string;
}
