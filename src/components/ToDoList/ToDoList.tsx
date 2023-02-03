import { Reorder } from "framer-motion";
import React from "react";
import { IToDoList } from "../Interface/Interface";
import ToDoItem from "../ToDoItem/ToDoItem";

interface IList {
  todoList: IToDoList[];
  setTodoList: any;
}

const ToDoList: React.FC<IList> = ({ todoList, setTodoList }) => {

  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((task: IToDoList) => task.id !== id))
  };

  return (
    <Reorder.Group axis="y" values={todoList} onReorder={setTodoList} className="todoList">
      {todoList.length !== 0 ? todoList.map((item) => (
        <ToDoItem item={item} key={item.id} deleteTask={deleteTask} />
      )) : <h2>Задачи отсутсвуют</h2>}
    </Reorder.Group>
  );
};

export default ToDoList;
