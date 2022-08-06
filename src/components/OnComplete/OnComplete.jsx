import React from "react";
import CustomButton from "../Form/CustomButton";
import { clearAll } from "../../redux/Slice";
import { useDispatch } from "react-redux";

const OnComplete = ({ setIsComplete }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center gap-8">
            <div>
                <img src="images/icon-complete.svg" alt="image" />
            </div>
            <div className="text-center font-[500] flex flex-col gap-4">
                <p className="text-four text-[18px]">
                    {"Thank you!".toUpperCase()}
                </p>
                <p className="text-five">We've added your card details</p>
            </div>
            <div>
                <CustomButton
                    onClick={() => {
                        dispatch(clearAll())
                        setIsComplete(false);
                    }}
                    title="Continue"
                />
            </div>
        </div>
    );
};

export default OnComplete;
