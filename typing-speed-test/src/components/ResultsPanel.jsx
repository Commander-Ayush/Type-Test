import { AlertCircle, RotateCcw, Target, TrendingUp, Trophy } from 'lucide-react';
import { getPerformanceLevel } from '../utils/calculations';
import { PERFORMANCE_MESSAGES } from '../utils/constants';

const ResultsPanel = ({ wpm, accuracy, errors, totalWords, onRestart }) => {
    const performanceLevel = getPerformanceLevel(wpm);
    const performanceMessage = PERFORMANCE_MESSAGES[performanceLevel.toUpperCase()];

    return (
        <div className="results-panel">
            <div className="text-center mb-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Test Complete!</h2>
                <p className="text-lg text-gray-600">{performanceMessage}</p>
            </div>

            <div className="results-grid">
                <div className="result-card wpm">
                    <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-6 h-6 mr-2" />
                        <h3 className="result-title">Words Per Minute</h3>
                    </div>
                    <div className="result-value">{wpm}</div>
                </div>

                <div className="result-card accuracy">
                    <div className="flex items-center justify-center mb-2">
                        <Target className="w-6 h-6 mr-2" />
                        <h3 className="result-title">Accuracy</h3>
                    </div>
                    <div className="result-value">{accuracy}%</div>
                </div>

                <div className="result-card errors">
                    <div className="flex items-center justify-center mb-2">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        <h3 className="result-title">Errors</h3>
                    </div>
                    <div className="result-value">{errors}</div>
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                    You typed <strong>{totalWords}</strong> words with <strong>{accuracy}%</strong> accuracy.
                </p>
                <button
                    onClick={onRestart}
                    className="btn btn-primary"
                >
                    <RotateCcw size={18} />
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ResultsPanel;