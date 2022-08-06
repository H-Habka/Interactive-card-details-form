import React from "react";
import styles from "./CustomInputStyle.module.css";

const CustomInput = ({
    placeholder,
    label,
    error,
    className,
    isCrezy,
    name,
    value,
    setValue,
    maxLength,
}) => {
    return (
        <label className="w-full relative">
            <p>{label}</p>
            <input
                maxLength={maxLength}
                name={name}
                className={`rounded-lg p-2 border ${
                    error ? "border-three" : "border-gray-300"
                } ${
                    styles.border_at_active_state
                }  text-[18px] outline-none ${className}`}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue({ [name]: e.target.value })}
            />
            {error && (
                <p
                    className={`text-xs absolute font-[500] text-three ${
                        isCrezy ? " -bottom-7" : " -bottom-4"
                    }`}
                >
                    {error}
                </p>
            )}
        </label>
    );
};

export default CustomInput;
