import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';

const User = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isChangePass, setIsChangePass] = useState(false);
  const history = useHistory();


  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="userdata mb-5">
          <div className="row">
            <label className="col-1">Username:</label>
            <h6 className="col-1">dummyName</h6>
          </div>
          {!isChangePass ? 
          <div className="row">
            <label className="col-1">Password:</label>
            <h6 className="col-1">*********</h6> 
          </div> : 
          <div className="row">
            <label className="newla">New Password:</label>
            <input className="newpass" type="text"/>
          </div>}
        </div>
        <div className="buttons row mt -5">
          <div className="btn1">
           {!isChangePass ? <button className="btn btn-outline-dark" onClick={() => setIsChangePass(true)}>Change Password</button> 
           :  <button className="btn btn-outline-dark">Save Password</button>}
          </div>
          <div className="btn2 ">
            {isLoggedIn && <button className="btn btn-outline-dark" onClick={() => history.push('/Login')}>Logout</button>} 
          </div>
        </div>
        <Route path="/Login" component={Login} />
      </div>
    </div>
  );
};
export default User;