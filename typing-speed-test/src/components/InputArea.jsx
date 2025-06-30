import { useEffect, useRef } from 'react';

const InputArea = ({ userInput, onInputChange, isActive, isFinished }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current && !isFinished) {
            inputRef.current.focus();
        }
    }, [isFinished]);

    const handleChange = (e) => {
        onInputChange(e.target.value);
    };

    return (
        <div className="mb-6">
            <textarea
                ref={inputRef}
                value={userInput}
                onChange={handleChange}
                placeholder={!isActive ? "Start typing to begin the test..." : "Keep typing..."}
                disabled={isFinished}
                className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none text-lg font-mono"
            />
        </div>
    );
};

export default InputArea;