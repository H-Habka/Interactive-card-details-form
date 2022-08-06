import { useSelector } from "react-redux";

const FristCard = () => {
    const { cardNumber, expMonth, expYear, cardHolderName } = useSelector(
        (state) => ({ ...state.Slice.data })
    );
    return (
        <div className="relative h-fit w-fit">
            <img src="images/bg-card-front.png" alt="image" />
            <div className="absolute top-0 left-0 p-4 xs:p-8 flex flex-col justify-around xs:justify-between h-full w-full  rounded-xl tracking-wider">
                <div>
                    <img src="images/card-logo.svg" alt="logo" />
                </div>
                <div className="flex flex-col gap-4 text-seven font-[500]">
                    <div className="text-[1rem] xs:text-[20px]  xs:pr-4 tracking-3 xs:tracking-5 flex w-full justify-around">
                        <span>{cardNumber.substr(0,4).padEnd(4,0)}</span>
                        <span>{cardNumber.substr(4,4).padEnd(4,0)}</span>
                        <span>{cardNumber.substr(8,4).padEnd(4,0)}</span>
                        <span>{cardNumber.substr(12,4).padEnd(4,0)}</span>
                    </div>
                    <div className="flex justify-between text-[14px] text-six w-full ">
                        <div>
                            {cardHolderName
                                ? cardHolderName.toUpperCase()
                                : "JANE APPLESEED"}
                        </div>
                        <div>
                            {expMonth.padStart(2, 0)}/{expYear.padStart(2, 0)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FristCard;
