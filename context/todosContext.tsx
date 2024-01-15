import React, { useContext } from "react"
import { TodoType } from "../api/models"

type TodosContextType = {
    todos: TodoType[],
    setTodos: (todos: TodoType[]) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void,
}
  
const TodosContext = React.createContext<TodosContextType>(null!)

export const useTodos = () => {
    const context = useContext(TodosContext);

    if(!context)
        throw Error("This component needs to be inside a provider!");

    return context;
};

type TodosContextProviderPropsType = {
    children: React.ReactNode,
} & TodosContextType

export const TodosContextProvider = (props: TodosContextProviderPropsType) => {
    const { children } = props;
    return (<TodosContext.Provider value={{...props}}>
        {children}
    </TodosContext.Provider>)
};