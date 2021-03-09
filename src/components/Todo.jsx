
import '../style/components/todo.css';

const Todo = () => {
    return(
        <div className="c-todo">
            <input className="o-hide-accessible c-todo-input__hidden" type="checkbox" name="" id="duif" />
            <label className="c-todo-input__label" htmlFor="duif">
                <div className="c-todo-input__check">
                    <svg className="c-todo-input__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6.75">
                        <path d="M4.75,9.5a1,1,0,0,1-.707-.293l-2.25-2.25A1,1,0,1,1,3.207,5.543L4.75,7.086,8.793,3.043a1,1,0,0,1,1.414,1.414l-4.75,4.75A1,1,0,0,1,4.75,9.5" transform="translate(-1.5 -2.75)"></path>
                    </svg>
                </div>

                <div className="c-todo-description">
                    <p className="c-todo-description__title">De duiven te eten geven</p>
                    <p className="c-todo-description__category">Hobby</p>
                </div>
            </label>
        </div>
    )
}

export default Todo;