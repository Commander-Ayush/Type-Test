import { CHARACTERS_PER_WORD, PERFORMANCE_THRESHOLDS } from './constants.js';

export const calculateWPM = (charactersTyped, timeElapsedMinutes) => {
    if (timeElapsedMinutes <= 0) return 0;
    return Math.round((charactersTyped / CHARACTERS_PER_WORD) / timeElapsedMinutes);
};

export const calculateAccuracy = (userInput, targetText) => {
    if (userInput.length === 0) return 100;

    const minLength = Math.min(userInput.length, targetText.length);
    let correctChars = 0;

    for (let i = 0; i < minLength; i++) {
        if (userInput[i] === targetText[i]) {
            correctChars++;
        }
    }

    return Math.round((correctChars / minLength) * 100);
};

export const countErrors = (userInput, targetText) => {
    let errors = 0;
    const minLength = Math.min(userInput.length, targetText.length);

    for (let i = 0; i < minLength; i++) {
        if (userInput[i] !== targetText[i]) {
            errors++;
        }
    }

    return errors;
};

export const getPerformanceLevel = (wpm) => {
    if (wpm >= PERFORMANCE_THRESHOLDS.EXCELLENT_WPM) return 'excellent';
    if (wpm >= PERFORMANCE_THRESHOLDS.GOOD_WPM) return 'good';
    if (wpm >= PERFORMANCE_THRESHOLDS.DECENT_WPM) return 'decent';
    return 'needs_work';
};

export const getColorClass = (value, type) => {
    if (type === 'wpm') {
        if (value >= PERFORMANCE_THRESHOLDS.EXCELLENT_WPM) return 'text-green-600';
        if (value >= PERFORMANCE_THRESHOLDS.GOOD_WPM) return 'text-yellow-600';
        return 'text-red-600';
    }

    if (type === 'accuracy') {
        if (value >= PERFORMANCE_THRESHOLDS.EXCELLENT_ACCURACY) return 'text-green-600';
        if (value >= PERFORMANCE_THRESHOLDS.GOOD_ACCURACY) return 'text-yellow-600';
        return 'text-red-600';
    }

    return 'text-gray-600';
};