import { Play, RotateCcw } from 'lucide-react';

const ControlButtons = ({ isActive, isFinished, onStart, onReset }) => {
    return (
        <div className="flex justify-center gap-4">
            {!isActive && !isFinished && (
                <button
                    onClick={onStart}
                    className="btn btn-primary"
                >
                    <Play size={18} />
                    Start Test
                </button>
            )}
            
            {(isActive || isFinished) && (
                <button
                    onClick={onReset}
                    className="btn btn-secondary"
                >
                    <RotateCcw size={18} />
                    Reset Test
                </button>
            )}
        </div>
    );
};

export default ControlButtons;