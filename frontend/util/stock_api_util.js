export const fetchCompanyInfo = ticker => {
  return ($.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${window.iexAPIKey}`,
    method: 'GET'
  })
)}

// export const fetchNews = ticker => {
//   return ($.ajax({
//     url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1y/?token=${window.iexAPIKey}`,
//     method: 'GET'
//   })
// )}

export const fetchStocks1y = ticker => {
  return ($.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1y/?token=${window.iexAPIKey}`,
    method: 'GET'
  })
)}