import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {TaskType} from "./components/Todolist";
import {v1} from "uuid";

export type  FilterValuesType = 'all' | 'active' | 'completed';

function App() {
    const title = 'What to learn';

    const [task, setTask] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])

    // const [filter, setFilter] = useState<FilterValuesType>('all');
    // const changeFilter = (nextFilterValue: FilterValuesType) => {
    //     setFilter(nextFilterValue)
    // }
    const removeTask = (taskId: string) => {
        setTask(task.filter(el => el.id !== taskId))
    }

    const addTitle = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false};
        setTask([newTask, ...task]);
    }
    //
    // // @ts-ignore
    // const getFilteredTasks = (allTasks: TaskType[], currentFilterValue: FilterValuesType): TaskType[] => {
    //     switch (currentFilterValue) {
    //         case 'completed':
    //             return allTasks.filter(el => el.isDone);
    //         case  'active':
    //             return allTasks.filter(el => !el.isDone);
    //         default:
    //             return allTasks
    //     }
    // }
    //
    // const filteredTasks: TaskType[] = getFilteredTasks(task, filter)

    return (
        <div className="App">
            <Todolist
                title={title}
                tasks={task}
                removeTask={removeTask}
                addTitle={addTitle}
                // changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
