import React from 'react'

class HomeNews extends React.Component {
  
  render() {
    return (
      <div className="articles">

        <h1>News</h1>

        {this.props.news.slice(0, 10).map((article, idx) => (
          <a href={article.url} className="articles-list-item" key={`article-${idx}`}>

            <div className="articles-image">
              <img src={article.urlToImage} />
            </div>

            <div className="articles-text">
              <h4>{article.source.name}</h4><br />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>

          </a>
        ))}
      </div>
    )
  }
}

export default HomeNews;

