import React from 'react'

class StockNews extends React.Component {
  render() {
    // debugger
    // console.log(this.props.news);
    return (
      <div className="articles">

        <h1>News</h1>

        {this.props.news.slice(0, 10).map((article, idx) => (
          <a href={article.url} className="articles-list-item" key={`article-${idx}`}>

            <div className="articles-text">
              <h4>{article.source.name}</h4><br />
              <h3>{article.title}</h3><br />
              <p>{article.description}</p>
            </div>

            <div className="articles-image">
              <img src={article.urlToImage} />
            </div>

          </a>
        ))}
      </div>
    )
  }
}

export default StockNews;

