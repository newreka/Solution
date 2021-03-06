import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { white } from 'material-ui/styles/colors';
import React from 'react';
import { Link } from 'react-router';
import MessageBox from './MessageBox';

const Signup = ({ errorText, email, password, confirmPassword, onSubmit }) => (
  <div className="auth-page">
    <AppBar
      iconElementRight={
        <RaisedButton
          containerElement={<Link to="/login" />}
          label="< Back"
          secondary
        />
      }
      showMenuIconButton={false}
      style={{ background: white, boxShadow: 'none' }}
    />

    <main className="container container--small">
      <div className="logo-container">
        <img src="images/company_logo.jpg" />
        <h1>Property Management System</h1>
        <h3>Newreka LLC</h3>
      </div>

      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      {errorText && <MessageBox error text={errorText} />}

      <form onSubmit={onSubmit}>
        <TextField
          autoFocus
          hintText="Email address"
          floatingLabelText="Email address"
          fullWidth
          required
          type="email"
          {...email}
        />
        <TextField
          hintText="Password (must be 8 characters)"
          floatingLabelText="Password (must be 8 characters)"
          fullWidth
          required
          type="password"
          {...password}
        />
        <TextField
          hintText="Confirm Password"
          floatingLabelText="Confirm Password"
          fullWidth
          required
          type="password"
          {...confirmPassword}
        />
        <center>
          <RaisedButton
            label="Sign up"
            primary
            style={{ marginTop: 16 }}
            type="submit"
          />
        </center>
      </form>
    </main>
    <footer className="version">
      Version 1.0.0
    </footer>
  </div>
);

Signup.propTypes = {
  errorText: React.PropTypes.string,
  email: React.PropTypes.object.isRequired,
  password: React.PropTypes.object.isRequired,
  confirmPassword: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default Signup;
