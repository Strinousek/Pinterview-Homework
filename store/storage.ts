import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoType } from "../api/models";

type GetTodosReturnType = [TodoType[], boolean]

export const storeTodos = async (todos: Array<TodoType>): Promise<boolean> => {
    try {
        await AsyncStorage.setItem("@Homework-Todos", JSON.stringify(todos))
        return true
    } catch {
        return false
    }
};

export const getTodos = async (): Promise<GetTodosReturnType> => {
    try {
        const todos = await AsyncStorage.getItem("@Homework-Todos");
        if(todos !== null)
            return [JSON.parse(todos), true];

        return [[], true];
    } catch {
        return [[], false];
    }
};

