import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
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
    if (localStorage.getItem('demoUser') === 'true') {
      localStorage.removeItem('demoUser');
      this.handleDemo();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  // handleDemo(e) {
  //   e.preventDefault();
  handleDemo() {
    const user = Object.assign({}, {
      email: 'warrenbuffett',
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

    // if (localStorage.getItem('loading') === 'true') {
    //   debugger
    //   <div> hello</div>
    // }
    return (
      <div className="signin-form">
        <img src={window.images.login} />
        <form onSubmit={this.handleSubmit} className="signin-form-content">
          <h2>Welcome to Ticker</h2>
          <div className="signin-form-text">
            <label>Email or username
              <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
                />
            </label>
            <br />
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
                />
            </label>
            <br />
            <Link to="/signup">Don't have an account? Sign up!</Link>
            <br />
            {this.renderErrors()}
            <br />
            <input className="signin-submit" type="submit" value='Sign In' onClick={this.handleSubmit} />
            {/* <input className="signin-demo" type="submit" value='Demo' onClick={this.handleDemo} /> */}
          </div>
        </form>
      </div>
    );
  }

  demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
    localStorage.setItem('loading', 'true');
    setTimeout(() => this.props.login(user), totalDemoTime)

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


export default SignInForm;

