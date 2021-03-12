
import { ChangeEvent } from 'react';
import { Todo as TodoModel } from '../models/Todo';
import '../style/components/todo.css';

const Todo = ({ todo, onTodoChange } : { todo: TodoModel, onTodoChange: Function}) => {
    return(
        <div className="c-todo">
            <input
                onChange={(e: ChangeEvent) => { onTodoChange(e) }}
                className="o-hide-accessible c-todo-input__hidden"
                type="checkbox"
                name="todos"
                id={todo.id}
                checked={todo.finished}
            />
            <label className="c-todo-input__label" htmlFor={todo.id}>
                <div className="c-todo-input__check">
                    <svg className="c-todo-input__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6.75">
                        <path d="M4.75,9.5a1,1,0,0,1-.707-.293l-2.25-2.25A1,1,0,1,1,3.207,5.543L4.75,7.086,8.793,3.043a1,1,0,0,1,1.414,1.414l-4.75,4.75A1,1,0,0,1,4.75,9.5" transform="translate(-1.5 -2.75)"></path>
                    </svg>
                </div>

                <div className="c-todo-description">
                    <p className="c-todo-description__title">{ todo.title }</p>
                    <p className="c-todo-description__category">{ todo.category }</p>
                </div>
            </label>
        </div>
    )
}

export default Todo;