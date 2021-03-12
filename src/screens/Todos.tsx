// #1 Eerst framework imports
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

// #2 Third library packages

// #3 Custom / own code
//import ts from '../utils/local';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Container from '../components/Containers';
import Row from '../components/Row';
// TodoComponent ipv Todo, anders heb je die naam 2x
import TodoComponent from '../components/Todo';

import '../style/components/add-todo.css';
import { Todo } from '../models/Todo';

const Todos = () => {
    // Ronde haakjes ipv curly brackets = automatisch returnen
    const generateRandomId = () => (
        Math.floor(Math.random() * 1000000).toString()
    )

    const [todos, setTodos] = useState<Todo[]>(localStorage.getItem('@todos') ? JSON.parse(localStorage.getItem('@todos') as string) : []);
    const [newTodo, setNewTodo] = useState<Todo>({
        id: generateRandomId(),
        finished: false,
        title: '',
        category: 'default'
    });

    const saveTodo = () => {
        if (newTodo.id && newTodo.title && newTodo.category && newTodo.category !== "default") {
            // Opslaan
            setTodos((currentTodos: Todo[]) => {
                return [ ...currentTodos, newTodo ];
            })

            // Reset van de oude
            setNewTodo({
                id: generateRandomId(),
                finished: false,
                title: '',
                category: newTodo.category
            })
        }
        else {
            console.warn("Something doesn't look good", { newTodo });
        }
    }

    useEffect(() => {
        //const todosToSave: Todo[] = todos;
        const todosToSave : Todo[] = todos.filter((todo: Todo) => 
            !todo.finished
        )

        localStorage.setItem('@todos', JSON.stringify(todosToSave));
    }, [todos])

    return (
        <main>
            <AppHeader todosLeft={todos.length} />

            <Row>
                <Container>
                    {/* ADD TODO */}
                    <div className="c-todo-add">
                        <button
                            onClick={saveTodo}
                            className="c-add-todo-button"
                        >
                            <svg
                                className="c-add-todo-button__icon"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div className="c-add-todo-data">
                            <input
                                value={newTodo?.title}
                                onInput={(e: FormEvent) => {
                                    setNewTodo((oldTodo: Todo) => {
                                        const inputElement = e.target as HTMLInputElement;
                                        oldTodo.title = inputElement.value;
                                        console.log("Input:", oldTodo)
                                        return { ...oldTodo }
                                    })
                                }}
                                className="c-add-todo-data__input"
                                placeholder="What needs to be done?"
                                type="text"
                                name=""
                                id=""
                            />
                            <div>
                                {/* TODO: make custom dropdown item */}
                                <select
                                    value={newTodo?.category}
                                    onChange={(e: FormEvent) => {
                                        setNewTodo((oldTodo: Todo) => {
                                            const inputElement = e.target as HTMLSelectElement;
                                            oldTodo.category = inputElement.options[inputElement.options.selectedIndex].value;
                                            return { ...oldTodo }
                                        })
                                    }}
                                    className="c-add-todo-data__select"
                                    name=""
                                    id=""
                                >
                                    <option disabled value="default">Pick a category</option>
                                    <option value="hobby">Hobby</option>
                                    <option value="school">School</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Here goes the todos */}
                    {todos.map((t) => (
                        <TodoComponent
                            onTodoChange={(e: ChangeEvent) => {
                                const target = e.target as HTMLInputElement;
                                t.finished = target.checked;

                                setTodos((oldTodos: Todo[]) => {
                                    oldTodos.map((currentTodo) => {
                                        if (currentTodo.id === t.id) currentTodo.finished = target.checked;
                                        return currentTodo;
                                    })

                                    return [ ...oldTodos ];
                                })
                            }}
                            key={t.id}
                            todo={t}
                        />)
                    )}
                </Container>
            </Row>
            
            <AppFooter />
        </main>
    )
}

export default Todos;