import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { stopwatchState } from "../recoil/atoms/StopwatchState";
import MainStyle from '../styles/main.module.css'

const MainStopwatch = () => {
    const [stopwatchValue, setStopwatchValue] = useRecoilState(stopwatchState);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStopwatchValue((current) => current + 1);
        }, 100);

        return () => clearInterval(intervalId);
    }, [setStopwatchValue]);

    return <span className={MainStyle.stopwatch}>{stopwatchValue}</span>;
};

export default MainStopwatch;
