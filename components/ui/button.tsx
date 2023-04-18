import Link from "next/link";

import classes from "./button.module.css";

interface ButtonProps {
  link?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  if (props.link) {
    return (
      <Link
        className={classes.btn}
        href={props.link}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={classes.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
