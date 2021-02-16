import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import TodoListPresenter from "./todoListPresenter";
import {
  todoListState,
  todoListFilterState,
  todoListStatsState,
} from "../../stores/stores";

const TodoListContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(todoListState);
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <TodoListPresenter
      addItem={addItem}
      inputValue={inputValue}
      onChange={onChange}
      todoList={todoList}
      filter={filter}
      updateFilter={updateFilter}
      totalNum={totalNum}
      totalCompletedNum={totalCompletedNum}
      totalUncompletedNum={totalUncompletedNum}
      percentCompleted={percentCompleted}
      formattedPercentCompleted={formattedPercentCompleted}
    />
  );
};

export default TodoListContainer;

let id = 0;
function getId() {
  return id++;
}
