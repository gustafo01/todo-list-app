
export interface IToDoList {
    title: string,
    id: number,
    isComplited: boolean
    prioryti: number
    crateAt: string
}


export interface IContext {
    todoList: IToDoList[]
    setTodoList(todos: IToDoList[]):void  
}