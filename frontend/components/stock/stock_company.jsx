import React from 'react'

class StockCompany extends React.Component {
  render() {
    const { company } = this.props;

    return (
      <div className="company">    
        <h1>About</h1 >

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

