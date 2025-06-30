import { getCharacterClass } from '../utils/textHelpers.js';

const TextDisplay = ({ currentSentence, userInput }) => {
    return (
        <div className="mb-6">
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <div className="text-lg leading-relaxed font-mono">
                    {currentSentence.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`${getCharacterClass(index, userInput, currentSentence)} px-0.5 rounded`}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextDisplay;