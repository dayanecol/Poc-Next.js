import { InputHTMLAttributes } from "react";
import styles from "../styles/Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProps) {
  return <input className={styles.input} {...props} />;
}
