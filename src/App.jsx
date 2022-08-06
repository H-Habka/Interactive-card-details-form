import FristCard from "./components/Cards/FristCard";
import SecondCard from "./components/Cards/SecondCard";
import Form from "./components/Form/Form";
import OnComplete from "./components/OnComplete/OnComplete";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const ModileComponent = ({ className }) => {
    return (
        <div className={`${className} relative`}>
            <img src="images/bg-main-mobile.png" alt="image" />
            <div className="absolute w-9/12 bottom-10 right-5">
                <SecondCard />
            </div>
            <div className="absolute w-9/12 -bottom-12 left-5">
                <FristCard />
            </div>
        </div>
    );
};

const DesktopComponent = () => {
    return (
        <div className="relative w-4/12">
            <img
                src="images/bg-main-desktop.png"
                alt="image"
                className="h-screen w-[400px]"
            />
            <div className="absolute w-[400px] top-[50%] right-[-55%]">
                <SecondCard />
            </div>
            <div className="absolute w-[400px] top-[14%] right-[-30%]">
                <FristCard />
            </div>
        </div>
    );
};

function App() {
    const isMobile = useMediaQuery({
        query: "(max-width: 600px)",
    });
    const [isComplete, setIsComplete] = useState(false);
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:w-full items-center">
            {isMobile ? <ModileComponent /> : <DesktopComponent />}
            <div className="w-fit mx-auto pb-4 mt-20 sm:mt-0">
                {isComplete ? <OnComplete setIsComplete={setIsComplete}/> : <Form setIsComplete={setIsComplete} />}
            </div>
        </div>
    );
}

export default App;
