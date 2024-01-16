import { View, Text, StyleSheet } from "react-native";
import { TodoType } from "../api/models";
import TodoButton from "./TodoButton";

type TodoComponentType = {
    data: TodoType,
    onDelete: (id: number) => void,
    onEdit: (id: number) => void,
    onChangeState: (id: number, state: boolean) => void,
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        marginTop: 8,
        width: "100%",
        backgroundColor: "rgba(52, 152, 219,0.3)",
    },
    todoText: {
        padding: 4,
        color: "black",
    },
    todoActionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",  
    },
    todoActionButton: {
        width: "33%",
        padding: 2,
    },
});

const Todo = ({data, onDelete, onEdit, onChangeState}: TodoComponentType) => {
    return (<View style={styles.todo}>
        <Text style={styles.todoText}>{data.description}</Text>
        <View style={styles.todoActionButtons}>
            <TodoButton
                title="Smazat"
                onPress={() => onDelete(data.id)}
                style={{button: styles.todoActionButton}}
            />
            <TodoButton
                title="Upravit"
                onPress={() => onEdit(data.id)}
                style={{button: styles.todoActionButton}}
            />
            <TodoButton
                title={data.done ? "✔️" : "❌"}
                onPress={() => onChangeState(data.id, !data.done)}
                style={{button: styles.todoActionButton}}
            />
        </View>
    </View>);
};

export default Todo;