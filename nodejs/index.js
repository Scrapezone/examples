const axios = require("axios");
require("dotenv").config();

const API_BASE_URL = "http://api.scrapezone.com";

const { BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD } = process.env;

const token = Buffer.from(
  `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`,
  "utf8"
).toString("base64");

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${token}`,
  },
});

const startScrape = async () => {
  try {
    const { data } = await instance.post(`${API_BASE_URL}/scrape`, {
      query: [
        "https://www.amazon.com/s?k=card+games",
        "https://www.amazon.com/s?k=keyboard",
      ],
      callback_url: "YOUR_CALLBACK_URL", // optional
    });
    console.log("startScrape function succeeded", data);
    return data;
  } catch (error) {
    console.log("startScrape function errored", error.response.data);
    throw error;
  }
};

const scrapeStatus = async (job_id) => {
  try {
    const { data } = await instance.get(`${API_BASE_URL}/scrape/${job_id}`);
    console.log("scrapeStatus function succeeded", data);
    return data;
  } catch (error) {
    console.log("scrapeStatus function errored", error.response.data);
    throw error;
  }
};

startScrape()
  .then((response) => {
    return scrapeStatus(response.job_id);
  })
  .catch((error) => {
    console.log("ERROR", error.response.data);
  });
