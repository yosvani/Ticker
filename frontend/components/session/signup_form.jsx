import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({}, {
      email: 'georgesoros',
      password: 'password'
    });
    this.demo(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <img src={window.images.error} className="exclamation" />
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <div className="signup-inner">
          <h2>Make Your Money Move</h2>
          <br />
          <p>
            Robinhood lets you invest in companies you love, commission-free.
        </p>
          <form>
            <label>
              <br />
              <input id="signup-box"
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
              />
            </label>
            <br />
            <label>
              <br />
              <input id="signup-box"
                type="text"
                value={this.state.email}
                placeholder="Email address"
                onChange={this.update('email')}
              />
            </label>
            <br />
            <label>
              <br />
              <input id="signup-box"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
              />
              <br />
              {this.renderErrors()}
              <br />
              <button className="signup-cont" onClick={this.handleSubmit}>Continue</button>
              <br />
              {/* <button className="signup-demo" onClick={this.demoUserSignin}>demo</button> */}

            </label>
          </form>
        </div>
      </div>
    )
  }






  // return(
  //     <div className = "signup-form" >
  //     <form onSubmit={this.handleSubmit} className="signup-form-content">
  //       <div classname="signup-text">
  //         <p>Welcome to Robinhood</p>
  //         <br />
  //         <p>Robinhood lets you invest in companies you love,<br />
  //           commission-free.</p>
  //       </div>
  //       <br />
  //       <div className="signup-name">
  //         <input
  //           type="text"
  //           value={'First name'}
  //           onChange={this.update('First name')}
  //           className="signup-name-first"
  //         />
  //         <input
  //           type="text"
  //           value={'Last name'}
  //           onChange={this.update('Last name')}
  //           className="signup-name-last"
  //         />
  //       </div>
  //       <div className="signup-email">
  //         <input
  //           type="text"
  //           value={'Email Address'}
  //           onChange={this.update('Email Address')}
  //           className="signup-email"
  //         />
  //       </div>
  //       <div className="signup-password">
  //         <input
  //           type="text"
  //           value={'Password(min. 6 characters)'}
  //           onChange={this.update('Password(min. 6 characters)')}
  //           className="signup-password"
  //         />
  //       </div>
  //       <input className="signup-submit" type="submit" value='Sign Up' onClick={this.handleSubmit} />
  //       <br />
  //       <br />
  //       <p>Already started?</p>
  //       <Link to='/signin'>Log in to complete your application.</Link>
  //     </form>
  //     <div className="signup-form-animation">
  //       <img src={window.images.signup} />
  //       <br />
  //       <p className="image-title">Commission-free stock trading.</p>
  //       <br />
  //       <p className="image-text">We’ve cut the fat that makes other<br />
  //         brokerages costly, like manual<br />
  //         account management and hundreds<br />
  //         of storefront locations, so we can<br />
  //         offer zero commission trading.
  //           </p>
  //     </div>
  //     </div>
  //   );








  demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
    setTimeout(() => this.props.loginForm(user), totalDemoTime)
  }

  demoEmail(email, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= email.length) {
        this.setState({ email: email.slice(0, i) })
        i++
      } else {
        clearInterval()
      }
    }, intervalSpeed);
  }

  demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        this.setState({ password: password.slice(0, j) })
        j++
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }
}


export default SignUpForm;

