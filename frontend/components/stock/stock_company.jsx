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
            <span>CEO<br />
              <p className="first">{company.CEO}</p>
            </span>
            <span>Symbol<br />
              <p>{company.symbol}</p>
            </span>
            <span>Company Name<br />
              <p>{company.companyName}</p>
            </span>
            <span>Exchange<br />
              <p>{company.exchange}</p>
            </span>
            <span>Website<br />
              <p>{company.website}</p>
            </span>
            <span>Sector<br />
              <p>{company.sector}</p>
            </span>
            <span>Headquarters<br />
              <p>{company.city}</p>
            </span>
            <span>Employees<br />
              <p>{company.employees}</p>
            </span>
        </div>

      </div>
    )
  }
}

export default StockCompany;

