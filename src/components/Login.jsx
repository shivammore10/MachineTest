import React, { PureComponent} from 'react';
import { withRouter } from 'react-router-dom';
  
class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  handleSubmit(e) {
    const { history } = this.props;
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert('Successfully Login');
        history.push('/Home');
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

render() {
  return (
  <div className="login-div">
   <div className="title">Login Form</div>
      <form method="post"  name="loginForm"  onSubmit= {this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="username" className="col-form-label">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={this.state.fields.username}
            onChange={this.handleChange}
            className="form-control form-control-lg"
            placeholder="Enter username" 
            id="username" 
          />
          <div className="errorMsg">{this.state.errors.username}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="col-form-label">Password:</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.fields.password}
            onChange={this.handleChange}
            className="form-control form-control-lg"
            placeholder="Enter password" 
            id="password" 
          />
         <div className="errorMsg">{this.state.errors.password}</div>
        </div>
      <input type="submit" className="btn Sub btn-primary"  value="Submit"/>
      </form>
  </div>
  );
  }
}

export default withRouter(Login);