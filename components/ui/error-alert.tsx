import classes from "./error-alert.module.css";

interface ErrorAlertProps {
  children: React.ReactNode
}

const ErrorAlert = (props: ErrorAlertProps): JSX.Element => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
