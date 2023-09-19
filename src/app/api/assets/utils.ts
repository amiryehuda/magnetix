import axios from "axios";

/*
Your Auth Token: 0066d704-fecc-46a7-aa8e-70f13cc2f55a
Account ID: qlxzNdultfBp4Y9sMUUd
Current Period End: Wed Oct 18 2023
API URL: https://api.thenextleg.io/v2
*/

export const BASE_URL = "https://api.thenextleg.io/v2";
export const AUTH_TOKEN = "0066d704-fecc-46a7-aa8e-70f13cc2f55a";
export const AUTH_HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
};
