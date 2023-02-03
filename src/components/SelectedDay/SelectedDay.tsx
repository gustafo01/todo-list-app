import React, { useContext } from "react";
import { TasksContext } from "../../App";
import SelectedDateTitle from "../SelectedDateTitle/SelectedDateTitle";
import ToDoList from "../ToDoList/ToDoList";

const SelectedDay = () => {

  const {todoList, setTodoList} = useContext(TasksContext);

  return (
    <div className="selectedDay">
      <SelectedDateTitle />
      {todoList ? (
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <h3>Нет задач</h3>
      )}
    </div>
  );
};

export default SelectedDay;
