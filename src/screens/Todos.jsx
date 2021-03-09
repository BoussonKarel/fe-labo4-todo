// #1 Eerst framework imports
import React, { useState } from 'react';

// #2 Third library packages

// #3 Custom / own code
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Container from '../components/Containers';
import Row from '../components/Row';
import Todo from '../components/Todo';

import '../style/components/add-todo.css';

const Todos = () => {
    const [placeholderTodos] = useState([{id: 1}, {id: 2}]);

    return (
        <main>
            <AppHeader />

            <Row>
                <Container>
                    {/* ADD TODO */}
                    <div className="c-todo-add">
                        <button className="c-add-todo-button">
                            <svg className="c-add-todo-button__icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="arcs">
                                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div className="c-add-todo-data">
                            <input className="c-add-todo-data__input" placeholder="What needs to be done?" type="text" name="" id="" />
                            <div>
                                {/* TODO: make custom dropdown item */}
                                <select className="c-add-todo-data__select" name="" id="">
                                    <option value="hobby">Hobby</option>
                                    <option value="school">School</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Here goes the todos */}
                    {placeholderTodos.map((t) => <Todo />)}
                </Container>
            </Row>
            
            <AppFooter />
        </main>
    )
}

export default Todos;