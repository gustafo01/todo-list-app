import { Button, DatePicker, DatePickerProps, Space } from "antd";
import React, { useState } from "react";
import { IToDoList } from "../Interface/Interface";
import SelectPriority from "../SelectPriority/SelectPriority";
import MyInput from "../UI/MyInput/MyInput";

interface IModal {
  addNewTask(task: IToDoList): void;
  setOpen(open: boolean): void;
}

const initTask = {
  title: "",
  isComplited: false,
  id: 0,
  prioryti: 0,
  crateAt: "2023-02-16",
};

const ModalAddTask: React.FC<IModal> = ({ addNewTask, setOpen }) => {
  const [task, setTask] = useState<IToDoList>(initTask);
  
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(dateString);
    task.crateAt = dateString
  };

  return (
    <>
      <MyInput
        value={task?.title}
        placeholder="Купить хлеб"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => setTask({ ...task, title: e.target.value })}
      />
      <div className="addBtnsModal">
        <Space direction="vertical">
          <DatePicker onChange={onChangeDate} />
        </Space>
        <SelectPriority prioryti={task.prioryti} />
        <Button type="primary" ghost={true} onClick={() => setOpen(false)}>
          Отмена
        </Button>
        <Button
          type="primary"
          onClick={() => {
            addNewTask(task);
            setOpen(false);
            setTask(initTask);
          }}
        >
          Добавить задачу
        </Button>
      </div>
    </>
  );
};

export default ModalAddTask;
