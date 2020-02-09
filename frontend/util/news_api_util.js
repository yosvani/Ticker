export const fetchNews = ticker => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=77647a5fa383459c8140c181509d6438`,
    method: 'GET'
  })
);

export const fetchPortfolioNews = () => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=stocks&apiKey=77647a5fa383459c8140c181509d6438`,
    // url: `https://newsapi.org/v2/top-headlines?apiKey=77647a5fa383459c8140c181509d6438&category=business&country=us`,
    method: 'GET'
  })
);

