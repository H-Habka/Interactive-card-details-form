import {useSelector} from 'react-redux'


const SecondCard = () => {
    const {cvc} = useSelector(state => ({...state.Slice.data}))
    return (
        <div className="p-6 rounded-xl relative w-fit">
            <img src="images/bg-card-back.png" alt="image" />
            <p className="absolute text-seven text-[14px] xs:text-[16px] tracking-widest top-[45%] xs:top-[46%] right-[18%]">
                {cvc.padStart(3,0)}
            </p>
        </div>
    );
};

export default SecondCard;
