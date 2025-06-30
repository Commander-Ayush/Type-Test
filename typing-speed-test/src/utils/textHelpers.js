import { SENTENCES } from './constants.js';

export const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * SENTENCES.length);
    return SENTENCES[randomIndex];
};

export const getCharacterClass = (index, userInput, targetText) => {
    if (index >= userInput.length) return 'text-gray-400';
    if (userInput[index] === targetText[index]) return 'text-green-600 bg-green-100';
    return 'text-red-600 bg-red-100';
};

export const countWords = (text) => {
    return text.trim().split(' ').filter(word => word.length > 0).length;
};