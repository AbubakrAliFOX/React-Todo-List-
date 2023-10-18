import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';

import { useState, useEffect} from 'react';

const getData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
}

export default function TodoList () {
    const [todos, setTodos] = useState(getData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
        })
    }

    return (
        <Box sx={{
            border: "1px solid grey"
        }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <TodoForm addTodo={addTodo} />
                {todos.map(todo => (
                    <TodoItem toggle={() => toggleTodo(todo.id)} remove={() => removeTodo(todo.id)} todo={todo} key={todo.id}/>
                    
                ))}
            </List>
        </Box>
    )
}
  








