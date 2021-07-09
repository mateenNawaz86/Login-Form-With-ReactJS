import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Links from "./Links";
import "./Form.css";

const Form = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);

  const userNameHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const pswHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    setLogin((prevUser) => {
      return [...prevUser, login];
    });
    if (enteredUser.trim().length > 0 && password.trim().length > 0) {
      console.log(`Username:  ${enteredUser} , Password:  ${password}`);
    }
    setEnteredUser("");
    setPassword("");
  };
  return (
    <Card>
      <div className="container">
        <div className="user-logo">
          <i className="fas fa-user-circle"></i>
        </div>

        <div className="inp_Container">
          <div className="username_inp">
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="Username"
              onChange={userNameHandler}
              value={enteredUser}
            />
          </div>

          <div className="psw_inp">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Password"
              onChange={pswHandler}
              value={password}
            />
          </div>
        </div>

        <div className="login_btn">
          <Button onClick={loginHandler}>Login</Button>
        </div>

        <div className="confirm_area">
          <div className="check_area">
            <Checkbox className="chkBox" />
            <p>Remember ME</p>
          </div>

          <div className="frgt_psw">
            <Link to="/" className="frgt_link">
              Forget your password
            </Link>
          </div>
        </div>

        <div className="links_area">
          <Links />
        </div>
      </div>
    </Card>
  );
};

export default Form;
