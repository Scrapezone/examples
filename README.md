# Documentation
Scrapezone Documentation
Google and eCommerce HTML Scraper
Send a request with up to 1,000 URLs and receive the raw, unblocked HTML files.
For trial accounts, the service is limited to Google.com and Amazon.com pages.

## Sending a request
A request is sent in batches of 1-1,000 URLs.

Endpoint: POST http://api.scrapezone.com/scrape

Parameters:

`query`: a list of URLs to scrape.

`callback_url`: the URL to send the response to once the scrape is done (Optional).

`country`: the country from which the request should be originated. Supported countries:

`'us', 'fr', 'it', 'de', 'uk'`

Request Example:

```curl --user user:pass -d '{ "query": [ "https://www.amazon.com/s?k=card+games", "https://www.amazon.com/s?k=keyboard" ], "callback_url": "YOUR_CALLBACK_URL" }'```

### Response
The response will be formatted in the following way:
`job_id`:  a list of URLs to scrape.

`callback_url`: the URL to send the response to once the scrape is done.

Response Example:

```
{
  "job_id": "12345678987654321",
  "callback_url": "YOUR_CALLBACK_URL"
}
```
## Getting the results:
There are two methods of getting the response:
* Using continuous polling (GET /scrape/job_id)
* Using a callback URL

### GET /scrape/job_id
An endpoint to check the scrape status and download the results once the scrape is done.
Status:
Status can be 

Callback URL 
If a callback URL was given in the request, once the scrape is done we will send a POST request to that URL, containing the response object. 

The response object will be in the following format:

```
{
  "job_id": "12345678987654321",
  "callback_url": "THE_CALLBACK_URL",
  "status:" <scraping/done/faulted>,
  "html_files:"
    [
    {
       "url": <given_url_1>,
       "output": <URL of the downloadable html file>
    },
    ...
    {
       "url": <given_url_n>,
       "output": <URL of the downloadable html file>
    },
    ]
}
```

“html_files” will be sent only for scrapes with status “done”, otherwise “results” will be null.

## Parsed Results
Coming soon!
