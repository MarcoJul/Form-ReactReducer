import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.box}>
      <h2 className={classes.title}>Signup</h2>
      <div className={classes.field}>
        <input type="text" />
        <label for="text">Name</label>
      </div>
      <div className={classes.field}>
        <input type="email" />
        <label for="email">Email</label>
      </div>
      <div className={classes.field}>
        <input type="password" />
        <label for="password">Password</label>
      </div>
      <div className={classes.field}>
        <input type="password" />
        <label for="password">Confirm Password</label>
      </div>
      <button className={classes.formButton}>Submit</button>
    </form>
  );
};

export default Form;
