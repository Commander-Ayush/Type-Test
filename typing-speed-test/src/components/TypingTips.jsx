import { Lightbulb } from 'lucide-react';

const TypingTips = () => {
    const tips = [
        "Keep your wrists straight and fingers curved",
        "Use all ten fingers and avoid looking at the keyboard",
        "Maintain good posture with feet flat on the floor",
        "Practice regularly to build muscle memory",
        "Focus on accuracy first, then build up speed",
        "Take breaks to avoid fatigue and strain"
    ];

    return (
        <div className="tips-card">
            <h3 className="tips-title">
                <Lightbulb size={20} />
                Typing Tips
            </h3>
            <ul className="tips-list">
                {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
        </div>
    );
};

export default TypingTips;