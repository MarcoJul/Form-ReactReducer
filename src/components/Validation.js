import { ReactComponent as ValidIcon } from "../assets/Success.svg";
import { ReactComponent as ErrorIcon } from "../assets/Error.svg";

import classes from "./Form.module.css";
import { Fragment } from "react/cjs/react.production.min";

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

const Validation = (props) => {
  let content;
  if (props.mailValue) {
    content =
      props.mailValue !== "" && props.mailValue.includes("@") ? (
        <ValidIcon />
      ) : (
        <Fragment>
          <ErrorIcon />
          <span className={classes.errorMessage}>{props.message}</span>
        </Fragment>
      );
  }

  if (props.nameValue) {
    content =
      props.nameValue !== "" && !DUMMY_NAMES.includes(props.nameValue) ? (
        <ValidIcon />
      ) : (
        <Fragment>
          <ErrorIcon />
          <span className={classes.errorMessage}>{props.message}</span>
        </Fragment>
      );
  }

  if (props.pswValue) {
    content =
      props.pswValue !== "" && props.pswValue.length > 7 ? (
        <ValidIcon />
      ) : (
        <Fragment>
          <ErrorIcon />
          <span className={classes.errorMessage}>{props.message}</span>
        </Fragment>
      );
  }

  if (props.pswValue && props.confirmPswValue) {
    content =
      props.pswValue !== "" &&
      props.confirmPswValue !== "" &&
      props.pswValue === props.confirmPswValue ? (
        <ValidIcon />
      ) : (
        <Fragment>
          <ErrorIcon />
          <span className={classes.errorMessage}>{props.message}</span>
        </Fragment>
      );
  }

  return <div className={classes.validation}>{content}</div>;
};

export default Validation;
