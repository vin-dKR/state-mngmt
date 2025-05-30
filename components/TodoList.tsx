"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Todo {
    id: number
    title: string
}

const TodoList = () => {

    const fetchTodos = async (): Promise<Todo[]> => {
        const res = axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.data)
            .catch((err) => err)

        return res
    }

    const { data: todos, error, isPending } = useQuery({
        queryKey: ["TodoList"],
        queryFn: fetchTodos
    })

    if (error) return <p className="text-red-500">{error.message}</p>

    if (isPending) return <div className="bg-blue-500 rounded-full h-10 w-10" />

    return (
        <div>
            {todos?.map((todo: Todo) => (
                <p key={todo.id}>
                    {todo.title}
                </p>
            ))}
        </div>
    )
}

export default TodoList
