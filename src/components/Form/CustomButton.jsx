import { motion } from "framer-motion";

const CustomButton = ({ title, onClick }) => {
    return (
        <motion.button
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(10,10,10)",
            }}
            whileTap={{ scale: 1.2 }}
            onClick={onClick}
            className="text-seven bg-four font-[500] py-2 px-28 rounded-lg"
        >
            {title}
        </motion.button>
    );
};

export default CustomButton;
