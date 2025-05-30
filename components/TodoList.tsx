"use client"

import axios from "axios"
import { useEffect, useState } from "react"

interface Todo {
    id: number
    title: string
}
const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [err, setErr] = useState('')

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => setTodos(res.data))
            .catch((err) => setErr(err))
    }, [])

    if (err) return <p className="text-red-500">{err}</p>

    return (
        <div>
            {todos.map((todo) => (
                <p key={todo.id}>
                    {todo.title}
                </p>
            ))}
        </div>
    )
}

export default TodoList
