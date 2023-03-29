import React from "react";
import styles from "../styles/Button.module.css";

type ButtonProps = {
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
};

const Button: React.FC<ButtonProps> = ({
  primaryColor = "#FFF",
  secondaryColor = "#85BAA1",
  onClick,
  children,
  width = "auto",
  height = "auto",
}) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: secondaryColor,
        color: primaryColor,
        width,
        height,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
