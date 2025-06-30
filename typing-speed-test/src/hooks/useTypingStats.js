import { useCallback, useState } from 'react';
import { calculateAccuracy, calculateWPM, countErrors } from '../utils/calculations.js';
import { countWords } from '../utils/textHelpers.js';

export const useTypingStats = () => {
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [errors, setErrors] = useState(0);
    const [totalWords, setTotalWords] = useState(0);

    const updateStats = useCallback((userInput, targetText, startTime) => {
        if (!startTime) return;

        const timeElapsedMinutes = (Date.now() - startTime) / 1000 / 60;
        const currentWpm = calculateWPM(userInput.length, Math.max(timeElapsedMinutes, 0.1));
        const currentAccuracy = calculateAccuracy(userInput, targetText);
        const currentErrors = countErrors(userInput, targetText);
        const wordsTyped = countWords(userInput);

        setWpm(currentWpm);
        setAccuracy(Math.max(0, currentAccuracy));
        setErrors(currentErrors);
        setTotalWords(wordsTyped);
    }, []);

    const resetStats = useCallback(() => {
        setWpm(0);
        setAccuracy(100);
        setErrors(0);
        setTotalWords(0);
    }, []);

    return {
        wpm,
        accuracy,
        errors,
        totalWords,
        updateStats,
        resetStats
    };
};