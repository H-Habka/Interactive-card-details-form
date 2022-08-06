import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDateInput from "./CustomDateInput";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../../redux/Slice";

const Form = ({ setIsComplete }) => {
    const [cardNumberError, setCardNumberError] = useState("");
    const [DateError, setDateError] = useState("");
    const [cvcError, setCvcError] = useState("");
    const dispatch = useDispatch();
    const { cardNumber, expMonth, expYear, cardHolderName, cvc } = useSelector(
        (state) => ({ ...state.Slice.data })
    );

    const handleButtonClick = () => {
        if (
            !cardNumberError &&
            !DateError &&
            !cvcError &&
            cardNumber.length === 16 &&
            expMonth &&
            expYear &&
            cardHolderName &&
            cvc.length === 3
        ) {
            setIsComplete(true)
        }
    };

    const handleChangeValue = (data) => {
        dispatch(setValue(data));
    };

    const handleCardNumberChange = (data) => {
        if (Object.values(data)[0].search(/[A-Za-z]/g) >= 0) {
            setCardNumberError("Wrong Format, Numbers only");
        } else {
            if (cardNumberError) {
                setCardNumberError("");
            }
        }
        dispatch(setValue(data));
    };

    const handleMonthChange = (data) => {
        if (Object.values(data)[0].search(/[A-Za-z]/g) >= 0) return;
        if (Object.values(data)[0].length === 0) {
            setDateError("Can't be blank");
        } else {
            if (DateError) setDateError("");
        }
        if (parseInt(Object.values(data)[0]) > 12) return;

        dispatch(setValue(data));
    };

    const handleCvcChange = (data) => {
        if (Object.values(data)[0].search(/[A-Za-z]/g) >= 0) return;
        if (Object.values(data)[0].length === 0) {
            setCvcError("Can't be blank");
        } else {
            if (cvcError) setCvcError("");
        }
        dispatch(setValue(data));
    };

    return (
        <div className="bg-seven flex gap-7 flex-col">
            <div className="flex flex-col gap-4">
                <CustomInput
                    error=""
                    className="w-full"
                    label="Cardholder Name"
                    placeholder="e.g. Jane Appleseed"
                    value={cardHolderName}
                    setValue={handleChangeValue}
                    name="cardHolderName"
                    maxLength="20"
                />
                <CustomInput
                    error={cardNumberError}
                    className="w-full"
                    label="Card Number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={cardNumber}
                    setValue={handleCardNumberChange}
                    name="cardNumber"
                    maxLength="16"
                />
                <div className="flex justify-between items-center">
                    <div>
                        <CustomDateInput
                            error={DateError}
                            label="Exp. Date (MM/YY)"
                            placeholder1="MM"
                            placeholder2="YY"
                            value1={expMonth}
                            setValue1={handleMonthChange}
                            setValue2={handleChangeValue}
                            name1="expMonth"
                            value2={expYear}
                            name2="expYear"
                            maxLength="2"
                        />
                    </div>
                    <div>
                        <CustomInput
                            error={cvcError}
                            className="w-28"
                            label="CVC"
                            placeholder="e.g. 123"
                            value={cvc}
                            setValue={handleCvcChange}
                            isCrezy={true}
                            name="cvc"
                            maxLength="3"
                        />
                    </div>
                </div>
            </div>
            <div>
                <CustomButton onClick={handleButtonClick} title="Confirm" />
            </div>
        </div>
    );
};

export default Form;
