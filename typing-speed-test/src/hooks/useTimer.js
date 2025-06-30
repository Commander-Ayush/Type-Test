import { useEffect, useState } from 'react';
import { TEST_DURATION } from '../utils/constants.js';

export const useTimer = (isActive, onTimeUp) => {
    const [timeLeft, setTimeLeft] = useState(TEST_DURATION);

    useEffect(() => {
        let interval = null;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        onTimeUp();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft, onTimeUp]);

    const resetTimer = () => {
        setTimeLeft(TEST_DURATION);
    };

    return { timeLeft, resetTimer };
};