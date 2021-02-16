import TodoItem from "../../components/todoItem";

export default ({
  filter,
  updateFilter,
  inputValue,
  onChange,
  addItem,
  todoList,
  totalNum,
  totalCompletedNum,
  totalUncompletedNum,
  formattedPercentCompleted,
}) => (
  <>
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
    Filter:
    <select value={filter} onChange={updateFilter}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
    {todoList.map((todoItem) => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </>
);
