require("dotenv").config();
const axios = require("axios");

const { SCRAPEZONE_USERNAME, SCRAPEZONE_PASSWORD } = process.env;

class ScrapezoneClient {
  constructor() {}

  async scrapeHtmlBatch(query) {
    try {
      const { data } = await axios.post(
        `https://api.scrapezone.com/scrape`,
        {
          query,
        },
        {
          auth: {
            username: SCRAPEZONE_USERNAME,
            password: SCRAPEZONE_PASSWORD,
          },
        }
      );
      console.log("scrapeHtmlBatch function succeeded", data);
      return data.job_id;
    } catch (error) {
      console.log("scrapeHtmlBatch function errored", error.response.data);
      throw error;
    }
  }

  async getScrapeStatus(job_id) {
    try {
      const { data } = await axios.get(
        `https://api.scrapezone.com/scrape/${job_id}`,
        {
          auth: {
            username: SCRAPEZONE_USERNAME,
            password: SCRAPEZONE_PASSWORD,
          },
        }
      );
      console.log("scrapeStatus function succeeded", data);
      return data;
    } catch (error) {
      console.log("scrapeStatus function errored", error.response.data);
      throw error;
    }
  }

  async get
}

module.exports = ScrapezoneClient;
