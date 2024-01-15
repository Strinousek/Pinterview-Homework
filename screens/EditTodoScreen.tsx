import React from "react";
import { Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamListType } from "../routes/AppRouter";
import { useTodos } from "../context/todosContext";
import { storeTodos } from "../store/storage";
import TodoForm from "../components/TodoForm";

const EditTodoScreen = ({navigation, route}: NativeStackScreenProps<RootStackParamListType, "EditTodo">) => {
    const {todos, setTodos} = useTodos();
    const todo = todos.find(item => item.id === route.params.todoId);

    if(!todo) {
        Alert.alert("ToDo neexistuje!");
        navigation.navigate("TodoList");
        return;
    }

    const editTodo = async (text: string) => {
        todo.description = text;
        const areTodosSaved = await storeTodos(todos);
        if(!areTodosSaved) {
            Alert.alert("ToDo se nezdařilo uložit.");
            return;
        }
        setTodos([...todos]); 
        navigation.navigate("TodoList");
    };
    
    return (<TodoForm
        buttonTitle="Upravit ToDo"
        onSubmit={(text) => editTodo(text)}
        todo={todo}
    />)
};

export default EditTodoScreen;