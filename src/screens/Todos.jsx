// #1 Eerst framework imports
import React, { useState } from 'react';


import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Container from '../components/Containers';
import Row from '../components/Row';
import Todo from '../components/Todo';

const Todos = () => {
    const [placeholderTodos] = useState([{id: 1}, {id: 2}]);

    return (
        <main>
            <AppHeader />

            <Row>
                <Container>
                    {/* Here goes the todos */}
                    {placeholderTodos.map((t) => <Todo />)}
                </Container>
            </Row>
            
            <AppFooter />
        </main>
    )
}

export default Todos;