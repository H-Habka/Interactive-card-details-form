import styles from "./CustomInputStyle.module.css";
import { motion } from "framer-motion";

const CustomDateInput = ({
    placeholder1,
    placeholder2,
    label,
    error,
    value1,
    value2,
    name1,
    name2,
    setValue1,
    setValue2,
    maxLength,
}) => {
    const labelVariants = {
        whileHover: {
            scale: 1.1,
            originX: 0,
            color: "#000000aa",
            fontWeight: 900,
            transition: { type: "spring", stiffness: 300 },
        },
    };
    return (
        <label className="w-full relative">
            <motion.p
                className="cursor-pointer"
                variants={labelVariants}
                whileHover="whileHover"
            >
                {label}
            </motion.p>
            <div className="flex gap-2">
                <motion.input
                    whileFocus={{ scale: 1.4 }}
                    maxLength={maxLength}
                    className={`w-16  ${
                        error ? "border-three" : "border-gray-300"
                    } rounded-lg ${
                        styles.border_at_active_state
                    } p-2 border outline-none `}
                    type="text"
                    placeholder={placeholder1}
                    value={value1}
                    onChange={(e) => setValue1({ [name1]: e.target.value })}
                    name={name1}
                />
                <motion.input
                    whileFocus={{ scale: 1.2 }}
                    maxLength={maxLength}
                    className={`w-14  ${
                        error ? "border-three" : "border-gray-300"
                    } rounded-lg ${
                        styles.border_at_active_state
                    } p-2 border outline-none `}
                    type="text"
                    placeholder={placeholder2}
                    value={value2}
                    onChange={(e) => setValue2({ [name2]: e.target.value })}
                    name={name2}
                />
            </div>
            {error && (
                <p className="text-xs absolute -bottom-4 font-[500] text-three">
                    {error}
                </p>
            )}
        </label>
    );
};

export default CustomDateInput;
