import React from 'react';
import HomeNews from './news';
import HomeStocks from '../stock/stock_portfolio';
import HomeChart from '../stock/stock_portfolio_chart';
import Splash from './splash_page';

import { css } from '@emotion/core';
import ClipLoader from "react-spinners/ClipLoader";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// constructor(props) {
//   super(props);
//   this.state = {
//     loading: true
//   };
// }


class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.override = css`
  //     display: block;
  //     margin: 0 auto;
  //     border-color: red;
  //   `;
  // }

  componentDidMount() {
    this.props.fetchHomeNews();
  }

  render() {
    const { currentUser, news, intraday } = this.props;

    const homepage = currentUser ? (

      <div className="home-page">
        <div className="home-page-left">
          <div className="home-chart">
            <HomeChart currentUser={currentUser} />
          </div>
          <div className="home-news">
            <HomeNews news={news} />
          </div>
        </div>

        <div className="home-page-right">
          <div className="home-stocks">
            <HomeStocks currentUser={currentUser} intraday={intraday} />
          </div>
        </div>
      </div>

    ) : (

        <div><Splash /></div>
      )

    return (
      <div>
        {homepage}
      </div>
    )
  } 

  
};


export default Home;







//     const { currentUser, news, intraday } = this.props;

// const homepage = currentUser ? (
//   (currentUser.portfolio.length > 5) ? (

//     <div className="home-page">
//       <div className="home-page-left">
//         <div className="home-chart">
//           <HomeChart currentUser={currentUser} />
//         </div>
//         <div className="home-news">
//           <HomeNews news={news} />
//         </div>
//       </div>

//       <div className="home-page-right">
//         <div className="home-stocks">
//           <HomeStocks currentUser={currentUser} intraday={intraday} />
//         </div>
//       </div>
//     </div>

//   ) : (

//       <div className="index-loader">
//         <ClipLoader
//           css={this.override}
//           sizeUnit={"px"}
//           size={50}
//           color={"#000000"}
//         />
//       </div>
//     )
// ) : (

//     <div><Splash /></div>

//   );

// return (
//   <div>
//     {homepage}
//   </div>
// )
//   } 