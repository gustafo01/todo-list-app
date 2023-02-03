import { FlagFilled } from "@ant-design/icons";
import { Button } from "antd";
import React, { useContext } from "react";
import { TasksContext } from "../../App";
import { definePrioryti } from "../../utils/definePrioryti";

interface ISelectPriority {
  id?: number;
  prioryti?: number;
}

const priorityList = [0, 1, 2];

const SelectPriority: React.FC<ISelectPriority> = ({ id, prioryti }) => {
  const { todoList, setTodoList } = useContext(TasksContext);

  const changePriority = (priorityNumber: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, prioryti: priorityNumber } : item
      )
    );
  };

  return (
    <ul className="priorityList">
      {priorityList.map((item: number) => (
        <li key={item}>
          <Button
            onClick={() => changePriority(item)}
            type={"default"}
            style={{ borderColor: item === prioryti ? "blue" : "gray" }}
          >
            <FlagFilled style={{ color: definePrioryti(item) }} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SelectPriority;
