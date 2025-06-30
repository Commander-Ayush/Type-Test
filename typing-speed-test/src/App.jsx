import TypingTest from './components/TypingTest';
import './styles/globals.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="text-center mb-8">
                    <h1 className="title">Typing Speed Test</h1>
                    <p className="subtitle">
                        Test your typing speed and accuracy with our interactive typing test.
                        Challenge yourself to improve your words per minute!
                    </p>
                </header>
                <TypingTest />
            </div>
        </div>
    );
}

export default App;