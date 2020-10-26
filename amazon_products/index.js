const ScrapezoneClient = require("scrapezone-node-sdk");
const scrapezoneClient = new ScrapezoneClient("username", "password");

scrapezoneClient.scrape({
    parser_name: 'amazon_product_display',
query: [
    'https://amazon.com/dp/B01LSUQSB0',
    'https://amazon.com/dp/B084K5HNCB'
]}).then(results => console.log(results));

