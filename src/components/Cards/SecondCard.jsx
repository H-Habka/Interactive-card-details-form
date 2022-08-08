import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const SecondCard = () => {
    const { cvc } = useSelector((state) => ({ ...state.Slice.data }));
    const cardVariants = {
        initial: {
            y: "100vh",
        },
        animate: {
            y: 0,
        },
        whileHover: {
            scale: 1.1,
            transition:{
                yoyo : Infinity
            }

        },
    };
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            className="p-6 rounded-xl relative w-fit"
        >
            <img src="images/bg-card-back.png" alt="CardBack" />
            <p className="absolute text-seven text-[14px] xs:text-[16px] tracking-widest top-[45%] xs:top-[46%] right-[18%]">
                {cvc.padStart(3, 0)}
            </p>
        </motion.div>
    );
};

export default SecondCard;
