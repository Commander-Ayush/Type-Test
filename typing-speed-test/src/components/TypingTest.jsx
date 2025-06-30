import { useTypingTest } from '../hooks/useTypingTest';
import ControlButtons from './ControlButtons';
import InputArea from './InputArea';
import ResultsPanel from './ResultsPanel';
import StatsDisplay from './StatsDisplay';
import TextDisplay from './TextDisplay';
import TypingTips from './TypingTips';

const TypingTest = () => {
    const {
        currentSentence,
        userInput,
        isActive,
        isFinished,
        timeLeft,
        wpm,
        accuracy,
        errors,
        totalWords,
        startTest,
        resetTest,
        handleInputChange
    } = useTypingTest();

    if (isFinished) {
        return (
            <div className="card">
                <ResultsPanel
                    wpm={wpm}
                    accuracy={accuracy}
                    errors={errors}
                    totalWords={totalWords}
                    onRestart={resetTest}
                />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Stats Display */}
            <div className="card">
                <StatsDisplay
                    timeLeft={timeLeft}
                    wpm={wpm}
                    accuracy={accuracy}
                    errors={errors}
                />
            </div>

            {/* Text Display */}
            <div className="card">
                <TextDisplay
                    currentSentence={currentSentence}
                    userInput={userInput}
                />
            </div>

            {/* Input Area */}
            <div className="card">
                <InputArea
                    userInput={userInput}
                    onInputChange={handleInputChange}
                    isActive={isActive}
                    isFinished={isFinished}
                />
            </div>

            {/* Control Buttons */}
            <div className="card">
                <ControlButtons
                    isActive={isActive}
                    isFinished={isFinished}
                    onStart={startTest}
                    onReset={resetTest}
                />
            </div>

            {/* Typing Tips */}
            <TypingTips />
        </div>
    );
};

export default TypingTest;