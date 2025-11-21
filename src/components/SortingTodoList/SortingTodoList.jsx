import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery, setIsSorting } from "../../actions/elementAction"

import "./SortingTodoList.css"

export function SortingTodoList() {
  const dispatch = useDispatch()
  const { searchQuery, isSorting } = useSelector((state) => state.element)

  return (
    <div className="sorting">
      <input
        className="sorting__search"
        type="text"
        placeholder="Поиск дела"
        value={searchQuery}
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
      />

      <div className="sorting__abc">
        <label htmlFor="sorting">Сортировка по алфавиту</label>
        <input
          type="checkbox"
          id="sorting"
          checked={isSorting}
          onChange={(event) => dispatch(setIsSorting(event.target.checked))}
        />
      </div>
    </div>
  )
}
