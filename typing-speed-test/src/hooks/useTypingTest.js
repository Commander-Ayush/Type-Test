import { useCallback, useState } from 'react';
import { getRandomSentence } from '../utils/textHelpers.js';
import { useTimer } from './useTimer.js';
import { useTypingStats } from './useTypingStats.js';

export const useTypingTest = () => {
    const [currentSentence, setCurrentSentence] = useState(() => getRandomSentence());
    const [userInput, setUserInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [startTime, setStartTime] = useState(null);

    const handleTimeUp = useCallback(() => {
        setIsActive(false);
        setIsFinished(true);
    }, []);

    const { timeLeft, resetTimer } = useTimer(isActive, handleTimeUp);
    const { wpm, accuracy, errors, totalWords, updateStats, resetStats } = useTypingStats();

    const startTest = useCallback(() => {
        setIsActive(true);
        setStartTime(Date.now());
        setIsFinished(false);
    }, []);

    const resetTest = useCallback(() => {
        setIsActive(false);
        setIsFinished(false);
        setUserInput('');
        setStartTime(null);
        setCurrentSentence(getRandomSentence());
        resetTimer();
        resetStats();
    }, [resetTimer, resetStats]);

    const handleInputChange = useCallback((value) => {
        // Auto-start test on first input
        if (!isActive && !isFinished && value.length > 0) {
            startTest();
        }

        setUserInput(value);

        // Update stats in real-time
        if (isActive && startTime) {
            updateStats(value, currentSentence, startTime);
        }

        // Check if sentence is completed
        if (value === currentSentence) {
            setCurrentSentence(getRandomSentence());
            setUserInput('');
        }
    }, [isActive, isFinished, startTime, currentSentence, startTest, updateStats]);

    return {
        // State
        currentSentence,
        userInput,
        isActive,
        isFinished,
        timeLeft,
        wpm,
        accuracy,
        errors,
        totalWords,

        // Actions
        startTest,
        resetTest,
        handleInputChange
    };
};