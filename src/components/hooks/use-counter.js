import { useState, useEffect } from "react";

const useCounter = (increment = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
        setCounter((prevCounter) => {
            if(increment) return prevCounter+1;
            else return prevCounter-1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return counter
}

export default useCounter