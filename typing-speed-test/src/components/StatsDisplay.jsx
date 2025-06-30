import { Award, Target, Timer, TrendingUp } from 'lucide-react';
import { getColorClass } from '../utils/calculations.js';

const StatsDisplay = ({ timeLeft, wpm, accuracy, errors }) => {
    const stats = [
        {
            icon: Timer,
            value: `${timeLeft}s`,
            label: 'Time Left',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
            textColor: 'text-blue-600',
            labelColor: 'text-blue-500'
        },
        {
            icon: TrendingUp,
            value: wpm,
            label: 'WPM',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600',
            textColor: getColorClass(wpm, 'wpm'),
            labelColor: 'text-green-500'
        },
        {
            icon: Target,
            value: `${accuracy}%`,
            label: 'Accuracy',
            bgColor: 'bg-yellow-50',
            iconColor: 'text-yellow-600',
            textColor: getColorClass(accuracy, 'accuracy'),
            labelColor: 'text-yellow-500'
        },
        {
            icon: Award,
            value: errors,
            label: 'Errors',
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600',
            textColor: 'text-red-600',
            labelColor: 'text-red-500'
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map(({ icon: Icon, value, label, bgColor, iconColor, textColor, labelColor }) => (
                <div key={label} className={`${bgColor} rounded-xl p-4 text-center`}>
                    <Icon className={`w-6 h-6 ${iconColor} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
                    <div className={`text-sm ${labelColor}`}>{label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsDisplay;