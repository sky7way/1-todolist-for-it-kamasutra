import React from "react"

type TitleProps = {
    title: string
    tasks: TaskTypeProps[]
}

type TaskTypeProps = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props:TitleProps) => {

    const tasksMap = props.tasks.map(el => {
        return (
        <li>
            <input type="checkbox" checked={ el.isDone }/> 
            <span>{ el.title }</span>
        </li>
        )
    })

  return  <div>
                <h3>{ props.title }</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>{ tasksMap }</ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
}