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

export interface POSTImagineSuccessResponse {
  success: boolean;
  messageId: string;
  createdAt: Date;
}

export interface ImagineResponse {
  createdAt: Date;
  buttons: "U1" | "U2" | "U3" | "U4" | "🔄" | "V1" | "V2" | "V3" | "V4";
  type: string;
  imageUrl: string;
  imageUrls: string[];
  buttonMessageId: string;
  originatingMessageId: string;
  content: string;
  ref: string;
  responseAt: Date;
}

export interface GETImagineResponse {
  progress: number;
  progressImageUrl: string | null;
}

export interface GETFullResponse {
  progress: number;
  createdAt: Date;
  buttons: "U1" | "U2" | "U3" | "U4" | "🔄" | "V1" | "V2" | "V3" | "V4";
  imageUrl: string;
  imageUrls: string[];
  buttonMessageId: string;
  originatingMessageId: string;
  content: string;
  ref: string;
  responseAt: Date;
}

export interface ButtonsResponse {
  createdAt: {
    _nanoseconds: number;
    _seconds: number;
  };
  buttons: "U1" | "U2" | "U3" | "U4" | "🔄" | "V1" | "V2" | "V3" | "V4";
  imageUrl: string;
  imageUrls?: string[];
  Upscales?: string[];
  buttonMessageId: string;
  originatingMessageId: string;
  content: string;
  ref: string;
  responseAt: Date;
}
