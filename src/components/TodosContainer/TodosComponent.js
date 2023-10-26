import React, {useEffect, useState} from 'react';

import {todosService} from "../../services/todosService";
import {TodoComponent} from "./TodoComponent";
import css from "./Todos.module.css"

const TodosComponent = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todosService.getAllTodos().then(value => setTodos(value.data));
    }, []);
    return (
        <div className={css.Todos}>
            {todos.map(value => <TodoComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {TodosComponent};