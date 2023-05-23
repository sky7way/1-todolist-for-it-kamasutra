import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

function App() {
    const title1 = 'What to learn 1';
    const title2 = 'What to learn 2';
    const title3 = 'What to learn 3';

    const task1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ]
    const task2 = [
        {id: 1, title: "Hello world!", isDone: true},
        {id: 2, title: "I'm happy!", isDone: false},
        {id: 3, title: "Yo!", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={ title1 } />
            <Todolist title={ title2 } />
            <Todolist title={ title3 } />
        </div>
    );
}

export default App;
