import { useState, useReducer } from "react";
import { ReactComponent as Eye } from "../assets/Eye.svg";
import { ReactComponent as EyeOff } from "../assets/Eye-off.svg";

import classes from "./Form.module.css";

const formReducer = (state, action) => {
  if (action.type === "NAME") {
    return {
      nameValue: action.val,
      mailValue: state.mailValue,
      pswValue: state.pswValue,
      confirmPswValue: state.confirmPswValue,
    };
  }
  if (action.type === "MAIL") {
    return {
      nameValue: state.nameValue,
      mailValue: action.val,
      pswValue: state.pswValue,
      confirmPswValue: state.confirmPswValue,
    };
  }
  if (action.type === "PASSWORD") {
    return {
      nameValue: state.nameValue,
      mailValue: state.mailValue,
      pswValue: action.val,
      confirmPswValue: state.confirmPswValue,
    };
  }
  if (action.type === "CONFIRM_PASSWORD") {
    return {
      nameValue: state.nameValue,
      mailValue: state.mailValue,
      pswValue: state.pswValue,
      confirmPswValue: action.val,
    };
  }
  return { nameValue: "", mailValue: "", pswValue: "", confirmPswValue: "" };
};

const Form = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [contentState, dispatchContentState] = useReducer(formReducer, {
    nameValue: "",
    mailValue: "",
    pswValue: "",
    confirmPswValue: "",
  });

  const handleBlur = (input) => {
    dispatchContentState({
      type: input.target.id,
      val: input.target.value,
    });
  };

  const showPswHandler = () => {
    setShowPassword((previous) =>
      previous === "password" ? "text" : "password"
    );
  };
  const showConfirmPswHandler = () => {
    setShowConfirmPassword((previous) =>
      previous === "password" ? "text" : "password"
    );
  };

  return (
    <form className={classes.box}>
      <h2 className={classes.title}>Signup</h2>
      <div className={classes.field}>
        <input type="text" id="NAME" onBlur={handleBlur} />
        <label
          htmlFor="text"
          className={contentState.nameValue !== "" ? classes.contentLabel : ""}
        >
          Name
        </label>
      </div>
      <div className={classes.field}>
        <input type="email" id="MAIL" onBlur={handleBlur} />
        <label
          htmlFor="email"
          className={contentState.mailValue !== "" ? classes.contentLabel : ""}
        >
          Email
        </label>
      </div>
      <div className={classes.field}>
        <input type={showPassword} id="PASSWORD" onBlur={handleBlur} />
        <label
          htmlFor="password"
          className={contentState.pswValue !== "" ? classes.contentLabel : ""}
        >
          Password
        </label>
        {showPassword === "password" ? (
          <Eye className={classes.showIcon} onClick={showPswHandler} />
        ) : (
          <EyeOff className={classes.showIcon} onClick={showPswHandler} />
        )}
      </div>
      <div className={classes.field}>
        <input
          type={showConfirmPassword}
          id="CONFIRM_PASSWORD"
          onBlur={handleBlur}
        />
        <label
          htmlFor="password"
          className={
            contentState.confirmPswValue !== "" ? classes.contentLabel : ""
          }
        >
          Confirm Password
        </label>
        {showConfirmPassword === "password" ? (
          <Eye className={classes.showIcon} onClick={showConfirmPswHandler} />
        ) : (
          <EyeOff
            className={classes.showIcon}
            onClick={showConfirmPswHandler}
          />
        )}
      </div>
      <button className={classes.formButton}>Submit</button>
    </form>
  );
};

export default Form;
