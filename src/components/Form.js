import { useState, useReducer } from "react";
import { ReactComponent as Eye } from "../assets/Eye.svg";
import { ReactComponent as EyeOff } from "../assets/Eye-off.svg";

import Validation from "./Validation";

import classes from "./Form.module.css";

const DUMMY_NAMES = [
  "Neo",
  "Trinity",
  "Morpheus",
  "Cypher",
  "Tank",
  "Apoc",
  "Mouse",
  "Switch",
  "Dozer",
];

///////////////////////////////////
////////   REDUCER FUNCTION    ////
///////////////////////////////////

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

///////////////////////////////////
////////   COMPONENT      /////////
///////////////////////////////////

const Form = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [contentState, dispatchContentState] = useReducer(formReducer, {
    nameValue: "",
    mailValue: "",
    pswValue: "",
    confirmPswValue: "",
  });

  let formIsValid = false;

  ///////////////////////////////////
  ////////   GENERIC BLUR      //////
  ///////////////////////////////////

  const handleBlur = (input) => {
    dispatchContentState({
      type: input.target.id,
      val: input.target.value,
    });
  };

  ///////////////////////////////////
  ////////   SHOW PASSWORD     //////
  ///////////////////////////////////

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

  if (
    contentState.nameValue !== "" &&
    contentState.mailValue !== "" &&
    contentState.pswValue !== "" &&
    contentState.confirmPswValue !== "" &&
    !DUMMY_NAMES.includes(contentState.nameValue) &&
    contentState.mailValue.includes("@") &&
    contentState.pswValue.length > 7 &&
    contentState.pswValue === contentState.confirmPswValue
  ) {
    formIsValid = true;
  }
  ///////////////////////////////////
  ////////   JSX CODE      //////////
  ///////////////////////////////////

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
        {contentState.nameValue !== "" && (
          <Validation
            names={DUMMY_NAMES}
            nameValue={contentState.nameValue}
            message="Username already in use"
          />
        )}
      </div>
      <div className={classes.field}>
        <input type="email" id="MAIL" onBlur={handleBlur} />
        <label
          htmlFor="email"
          className={contentState.mailValue !== "" ? classes.contentLabel : ""}
        >
          Email
        </label>
        {contentState.mailValue !== "" && (
          <Validation
            mailValue={contentState.mailValue}
            message="This is not a valid email address"
          />
        )}
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
        {contentState.pswValue !== "" && (
          <Validation
            pswValue={contentState.pswValue}
            message="Password must be at least 8 digits"
          />
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
        {contentState.confirmPswValue !== "" && (
          <Validation
            pswValue={contentState.pswValue}
            confirmPswValue={contentState.confirmPswValue}
            message="Doesn't match password"
          />
        )}
      </div>
      <button disabled={!formIsValid} className={classes.formButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
