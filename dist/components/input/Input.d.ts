import React, { InputHTMLAttributes } from "react";
import "./input.css";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
