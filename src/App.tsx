import React, { useState, createContext } from "react";
import { Route } from "react-router";
import { Routes, Navigate } from "react-router-dom";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import { IContext, IToDoList } from "./components/Interface/Interface";
import NavBar from "./components/NavBar/NavBar";
import SelectedDay from "./components/SelectedDay/SelectedDay";
import Sidebar from "./components/Sidebar/Sidebar";
import { initToDoList } from "./db/ToDos";

export const TasksContext = createContext<IContext>(null!);

function App() {
  const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(false);

  const [todoList, setTodoList] = useState<IToDoList[]>(
    JSON.parse(localStorage.getItem("todoList")!) || initToDoList
  );

  localStorage.setItem("todoList", JSON.stringify(todoList));

  return (
    <TasksContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      <div className="wrapper">
        <NavBar
          setIsActiveSidebar={setIsActiveSidebar}
          isActiveSidebar={isActiveSidebar}
        />
        <div className="main">
          {isActiveSidebar && <Sidebar />}
          <Routes>
            <Route path={"/home"} element={<SelectedDay />} />
            <Route path={"/calendar"} element={<CalendarPage />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
