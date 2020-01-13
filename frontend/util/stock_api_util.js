export const fetchStock = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=pk_7335495ec2aa45b3b88be788900cb241`,
    method: 'GET'
  })
)