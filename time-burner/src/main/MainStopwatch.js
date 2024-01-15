import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { stopwatchState } from "../recoil/atoms/StopwatchState";

const MainStopwatch = () => {
    const [stopwatchValue, setStopwatchValue] = useRecoilState(stopwatchState);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStopwatchValue((current) => current + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [setStopwatchValue]);

    return <div>{stopwatchValue}</div>;
};

export default MainStopwatch;
