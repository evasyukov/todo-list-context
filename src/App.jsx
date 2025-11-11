import { AppContext } from "./contex"
import { useTodos } from "./hooks"
import { AdditionForm, SortingTodoList, TodoList } from "./components"

export default function App() {
  const todoContextValue = useTodos()

  return (
    <AppContext.Provider value={todoContextValue}>
      <AdditionForm />
      <SortingTodoList />
      <TodoList />
    </AppContext.Provider>
  )
}
