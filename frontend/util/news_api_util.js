export const fetchNews = ticker => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=77647a5fa383459c8140c181509d6438`,
    dataType: 'jsonp',
    // method: 'GET'
  })
);

export const fetchHomeNews = () => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=stocks&apiKey=77647a5fa383459c8140c181509d6438`,
    dataType: 'jsonp',
    // method: 'GET'
  })
);

