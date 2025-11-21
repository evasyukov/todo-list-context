import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchTodos } from "./actions/thunks"
import { AdditionForm, SortingTodoList, TodoList } from "./components"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      <AdditionForm />
      <SortingTodoList />
      <TodoList />
    </>
  )
}
