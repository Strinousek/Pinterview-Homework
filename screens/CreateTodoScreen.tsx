import React from "react";
import { Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamListType } from "../routes/AppRouter";
import { useTodos } from "../context/todosContext";
import { storeTodos } from "../store/storage";
import TodoForm from "../components/TodoForm";

const CreateTodoScreen = ({navigation}: NativeStackScreenProps<RootStackParamListType, "CreateTodo">) => {
    const {todos, setTodos} = useTodos();

    const addNewTodo = async (text: string) => {
        const newTodo = {
            id: todos.length == 0 ? 1 : todos[todos.length - 1].id + 1,
            description: text,
            done: false,
        };

        const newTodos = [...todos, newTodo];
        const areTodosSaved = await storeTodos(newTodos);
        if(!areTodosSaved) {
            Alert.alert("ToDo se nezdařilo uložit.");
            return;
        }
        setTodos(newTodos); 
        navigation.navigate("TodoList");
    };
    
    return (<TodoForm
        buttonTitle="Přidat ToDo"
        onSubmit={(text) => addNewTodo(text)}
    />)
};

export default CreateTodoScreen;