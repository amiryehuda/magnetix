import axios from "axios";

/*
Your Auth Token: c3adc52a-4d66-49a1-bcd5-5bfabc4748b1
Account ID: 8i9uNrIBepwOhGyYNEMY
Current Period End: Wed Oct 18 2023
API URL: https://api.thenextleg.io/v2
*/

export const BASE_URL = "https://api.thenextleg.io/v2";
export const AUTH_TOKEN = "c3adc52a-4d66-49a1-bcd5-5bfabc4748b1";
export const AUTH_HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`,
};
