import React from "react";

const CustomButton = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className="text-seven bg-four font-[500] hover:text-four hover:bg-six py-2 px-28 rounded-lg">
            {title}
        </button>
    );
};

export default CustomButton;
