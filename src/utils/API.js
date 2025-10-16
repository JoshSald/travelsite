import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_API_KEY;
const CLIENT_SECRET = import.meta.env.VITE_API_SECRET;
const BASE_URL = "https://test.api.amadeus.com/v1/";

async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response?.data || error
    );
    throw error;
  }
}

/**
 * Generic API fetch function
 * @param {string} endpoint - API endpoint (e.g. '/v2/shopping/flight-offers')
 * @param {object} params - Query parameters
 */
export async function fetchAmadeus(endpoint, params = {}) {
  try {
    const token = await getAccessToken();

    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data from Amadeus API:",
      error.response?.data || error
    );
    throw error;
  }
}
