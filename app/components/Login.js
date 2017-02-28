import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { white } from 'material-ui/styles/colors';
import React from 'react';
import { Link } from 'react-router';
import MessageBox from './MessageBox';

const Login = ({ errorText, isAuthenticating, onSubmit }) => (
  <div className="auth-page">

      <main className="container container--small">
      <div className="logo-container">
        <img src="images/company_logo.jpg" />
        <h1>Property Management System</h1>
        <h3>Newreka LLC</h3>
      </div>

      <h2 style={{ textAlign: 'center' }}>Login</h2>
      {errorText && <MessageBox error text={errorText} />}

      <form onSubmit={onSubmit}>
        <TextField
          autoFocus
          hintText="Email address"
          floatingLabelText="Email address"
          fullWidth
          name="email"
          required
          type="email"
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          fullWidth
          name="password"
          required
          type="password"
        />
        <center>
          <RaisedButton
            disabled={isAuthenticating}
            label="Login"
            primary
            style={{ marginTop: 16 }}
            type="submit"
          >
            {isAuthenticating && <LinearProgress />}
          </RaisedButton>
        </center>
      </form>

      <FlatButton
        primary style={{ width: '100%' }}  
        containerElement={<Link to="/signup" />}
        label="Sign up as new user"
        secondary
      />
      
    </main>
    <footer className="version">
      Version 1.0.0
    </footer>
  </div>
);

Login.propTypes = {
  errorText: React.PropTypes.string,
  isAuthenticating: React.PropTypes.bool,
  onSubmit: React.PropTypes.func.isRequired,
};

export default Login;
