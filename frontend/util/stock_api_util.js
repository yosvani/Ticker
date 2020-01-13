export const fetchStock = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${window.iexAPIKey}`,
    method: 'GET'
  })
)