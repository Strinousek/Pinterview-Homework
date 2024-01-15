import React from "react";
import { ActivityIndicator, Alert, FlatList, StyleSheet } from "react-native";
import { RootStackParamListType } from "../routes/AppRouter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import TodoButton from "../components/TodoButton";
import { useTodos } from "../context/todosContext";
import Container from "../components/Container";
import { storeTodos } from "../store/storage";
import Todo from "../components/Todo";

const styles = StyleSheet.create({
    todoList: {
        flexDirection: "column",
        marginTop: 10,
        width: "80%",
    },
});

const TodoListScreen = ({navigation}: NativeStackScreenProps<RootStackParamListType, "TodoList">) => {
    const {todos, setTodos, loading} = useTodos();

    if(loading) {
        return (<Container>
            <ActivityIndicator
                size="large"
            />
        </Container>)
    }

    const deleteTodo = async (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        const areTodosSaved = await storeTodos(newTodos);
        if(!areTodosSaved) {
            Alert.alert("ToDo se nezdařilo odstranit.");
            return;
        }
        setTodos(newTodos);
    };

    const changeTodoState = async (id: number, state: boolean) => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);

        if(!todo) {
            Alert.alert("ToDo neexistuje.");
            return;
        }

        todo.done = state;
        
        const areTodosSaved = await storeTodos(newTodos);
        if(!areTodosSaved) {
            Alert.alert("ToDo se nezdařilo změnit stav.");
            return;
        }

        setTodos(newTodos);
    };

    return (<Container>
        <TodoButton
            title="Přidat nové ToDo"
            onPress={() => navigation.navigate("CreateTodo")}
        />
        {todos.length > 0 && <FlatList
            style={styles.todoList}
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            renderItem={({item}) => (
                <Todo data={item} 
                    onDelete={(id) => deleteTodo(id)}
                    onEdit={(id) => navigation.navigate("EditTodo", {todoId: id})}
                    onChangeState={(id, state) => changeTodoState(id, state)}
                />
            )}
        />}
    </Container>)
};

export default TodoListScreen;