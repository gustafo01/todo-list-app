import React, { useContext } from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { TasksContext } from "../../App";

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarPage: React.FC = () => {
  const { todoList } = useContext(TasksContext);
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const getListData = (value: Dayjs) => {
    let listData;
    const currentDate: string = value.format().slice(0, 10);
    listData = todoList.filter((item) => item.crateAt === currentDate);
    return listData;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events" onClick={() => console.log(listData)}>
        {listData.map((item) => (
          <li key={item.id}>
            <Badge
              status={"success" as BadgeProps["status"]}
              text={item.title}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="calendarWrap">
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default CalendarPage;
