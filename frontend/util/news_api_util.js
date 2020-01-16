export const fetchNews = () => (
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?apiKey=77647a5fa383459c8140c181509d6438&category=business&country=us`
  })
);
