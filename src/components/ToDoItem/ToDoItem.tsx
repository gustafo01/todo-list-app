import React, { useState } from "react";
import {
  EllipsisOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Button, message, Popover, Space } from "antd";
import Tooltip from "antd/es/tooltip";
import "./todoItem.css";

import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { IToDoList } from "../Interface/Interface";
import { Reorder } from "framer-motion";
import { definePrioryti } from "../../utils/definePrioryti";
import SelectPriority from "../SelectPriority/SelectPriority";

const { confirm } = Modal;

interface Item {
  item: IToDoList;
  deleteTask(id: number): void;
}

const ToDoItem: React.FC<Item> = ({ item, deleteTask }) => {
  const [open, setOpen] = useState(false);
  const [inFocus, setInFocus] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showDeleteConfirm = () => {
    confirm({
      title: "Вы действительно хотите удалить задачу?",
      icon: <ExclamationCircleFilled />,
      content: item.title,
      okText: "Да",
      okType: "danger",
      cancelText: "Нет",
      onOk() {
        deleteTask(item.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Задача выполнена",
    });
    setTimeout(() => deleteTask(item.id), 1000)
  };

  return (
    <Reorder.Item
    whileDrag={{ scale: 1.1, boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)" }}
    value={item}
    className={`oneTask`}
    >
      {contextHolder}
      <div
        onMouseEnter={() => setInFocus(true)}
        onMouseLeave={() => setInFocus(false)}
        className={`priority ${definePrioryti(item.prioryti)}`}
      >
        {inFocus && (
          <Space>
            <Button
              onClick={success}
              type="ghost"
              shape="circle"
              icon={<CheckOutlined style={{ fontSize: "10px" }} />}
              size={"small"}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </Space>
        )}
      </div>
      <h3>{item.title}</h3>
      <Popover
        placement="bottom"
        title={"Действия в задаче"}
        content={<SelectPriority id={item.id} prioryti={item.prioryti}/>}
        trigger="click"
      >
        <Tooltip className="moreBtn" title="Действия в задаче">
          <Button
            onClick={() => setOpen(true)}
            type="text"
            icon={<EllipsisOutlined />}
          />
        </Tooltip>
      </Popover>
      <Tooltip className="moreBtn" title="Удалить задачу">
        <Button
          type="text"
          icon={<CloseOutlined style={{ color: "#cf3030" }} />}
          onClick={showDeleteConfirm}
        />
      </Tooltip>
    </Reorder.Item>
  );
};

export default ToDoItem;
