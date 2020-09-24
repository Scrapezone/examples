const ScrapezoneClient = require("./ScrapezoneClient");

const scrapezoneClient = new ScrapezoneClient();

const run = async () => {
  try {
    const job_id = await scrapezoneClient.scrapeHtmlBatch([
      "https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/ref=zg_bs_nav_0",
      "https://www.amazon.com/Best-Sellers-Health-Personal-Care/zgbs/hpc/ref=zg_bs_nav_0",
      "https://www.amazon.com/Best-Sellers-Home-Kitchen/zgbs/home-garden/ref=zg_bs_nav_0",
      "https://www.amazon.com/Best-Sellers-Home-Improvement/zgbs/hi/ref=zg_bs_nav_0",
    ]);
  } catch (error) {}
};

run();
