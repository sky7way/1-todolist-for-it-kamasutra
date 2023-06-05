import React, {useState, KeyboardEvent, ChangeEvent} from "react"
import {FilterValuesType} from "../App";

type TitleProps = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    addTitle: (newTitle: string) => void
    // changeFilter: (nextFilterValue: FilterValuesType) => void
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = (props: TitleProps) => {

    const [filter, setFilter] = useState<FilterValuesType>('all');
    const changeFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    // @ts-ignore
    const getFilteredTasks = (allTasks: TaskType[], currentFilterValue: FilterValuesType): TaskType[] => {
        switch (currentFilterValue) {
            case 'completed':
                return allTasks.filter(el => el.isDone);
            case  'active':
                return allTasks.filter(el => !el.isDone);
            default:
                return allTasks
        }
    }

    const filteredTasks: TaskType[] = getFilteredTasks(props.tasks, filter)

    const tasksMap = filteredTasks.map(el => {
        const removeTask = () => props.removeTask(el.id)
        return (
            <li className={'tasks-list-item'} key={el.id}>
                <label className={'task-list-checkbox'}>
                    <input type="checkbox" checked={el.isDone}/>
                </label>
                <span className={'tasks-list-text'}>{el.title}</span>
                <button onClick={removeTask} className={'btn-del'}>x</button>
            </li>
        )
    })

    const [newTitle, setNewTitle] = useState('')

    const addTitleHandler = () => {
        props.addTitle(newTitle)
        setNewTitle('');
    }
    const  onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setNewTitle(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addTitleHandler();
    }
    const onClickAll = () => {
        changeFilter('all')
    }
    const onClickActive = () => {
        changeFilter('active')
    }
    const onClickCompleted = () => {
        changeFilter('completed')
    }

    return (
        <div className={'todolist'}>
            <h3 className={'todolist-header'}>{props.title}</h3>
            <div className={'todolist-content'}>
                <input onKeyDown={onKeyDownHandler} onChange={onChangeHandler} type={'text'} placeholder={'Add new task'} value={newTitle}/>
                <button onClick={addTitleHandler} className={'btn-add'}>+</button>
            </div>
            <ul className={'tasks-list'}>{tasksMap}</ul>
            <div className={'btn-block'}>
                <button onClick={onClickAll}>All</button>
                <button onClick={onClickActive}>Active</button>
                <button onClick={onClickCompleted}>Completed</button>
            </div>
        </div>
    )
}
