export const fetchCompanyInfo = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${window.iexAPIKey}`,
    method: 'GET'
  })
)

export const fetchIntraday = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${window.iexAPIKey}`,
    method: 'GET'
  })
)

export const fetchNews = ticker => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=77647a5fa383459c8140c181509d6438`,
    method: 'GET'
  })
);


