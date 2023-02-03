import React, { useState, useContext } from "react";
import { PlusOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Modal from "antd/es/modal/Modal";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import { TasksContext } from "../../App";
import { IToDoList } from "../Interface/Interface";
import { Button, Tooltip } from "antd";

interface INavBar {
  setIsActiveSidebar: any;
  isActiveSidebar: boolean;
}

const NavBar: React.FC<INavBar> = ({ setIsActiveSidebar, isActiveSidebar }) => {
  const [open, setOpen] = useState(false);
  const { todoList, setTodoList } = useContext(TasksContext);

  const addNewTask = (task: IToDoList) => {
    task.id = Date.now();
    setTodoList([...todoList, task]);
  };

  return (
    <>
      <div className="navBar">
        <Tooltip title={"Меню"}>
          <Button
            className={"navBtn"}
            ghost={true}
            icon={<MenuUnfoldOutlined />}
            onClick={() => setIsActiveSidebar(!isActiveSidebar)}
          />
        </Tooltip>
        <Tooltip title={"Добавить задачу"}>
          <Button
            className={"navBtn"}
            ghost={true}
            icon={<PlusOutlined />}
            onClick={() => setOpen(true)}
          />
        </Tooltip>
      </div>
      <Modal
        title="Создать задачу"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <ModalAddTask addNewTask={addNewTask} setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default NavBar;
