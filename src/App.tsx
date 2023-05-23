import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

function App() {
    const title1 = 'What to learn 1';
    const title2 = 'What to learn 2';
    const title3 = 'What to learn 3';

    return (
        <div className="App">
            <Todolist title={ title1 } />
            <Todolist title={ title2 } />
            <Todolist title={ title3 } />
        </div>
    );
}

export default App;
