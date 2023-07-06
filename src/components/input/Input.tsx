import React, { InputHTMLAttributes } from "react";
import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className="input" {...rest} />
    </div>
  );
};

export default Input;
