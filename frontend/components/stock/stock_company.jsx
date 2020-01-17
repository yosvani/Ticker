import React from 'react'

class StockCompany extends React.Component {
  render() {
    const { company } = this.props;

    return (
      <div className="company">   
        <div className="title">
          <h1>About</h1 >
          <h1 id="show-more">Show More</h1>
        </div> 

        <div className="description">
          {company.description}
        </div>

        <div className="facts">
          <div className="first-row-titles">
            <span>CEO<br />
              <p className="first">{company.CEO}</p>
            </span>
            <span>Employee<br />
              <p>{company.employees}</p>
            </span>
            <span>Headquarters<br />
              <p>{company.city}</p>
            </span>
            <span>Exchange<br />
              <p>{company.exchange}</p>
            </span>
          </div>
          <br />
          <br />
          <div className="second-row-titles">
            <span>CEO<br />
              <p>{company.CEO}</p>
            </span>
            <span>Employee<br />
              <p>{company.employees}</p>
            </span>
            <span>Headquarters<br />
              <p>{company.city}</p>
            </span>
            <span>Exchange<br />
              <p>{company.exchange}</p>
            </span>
          </div>
        </div>

      </div>
    )
  }
}

export default StockCompany;

