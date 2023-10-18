import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
