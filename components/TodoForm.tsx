import { useState } from "react";
import { TodoType } from "../api/models";
import { Alert, StyleSheet, TextInput } from "react-native";
import TodoButton from "./TodoButton";
import Container from "./Container";

type TodoFormType = {
    buttonTitle: string,
    onSubmit: (text: string) => void, 
    todo?: TodoType,
}

const styles = StyleSheet.create({
    textInput: {
        margin: 12,
        width: "80%",
        borderWidth: 1,
        padding: 10,
        backgroundColor: "rgba(52, 152, 219,0.1)",
    },
});

const TodoForm = ({buttonTitle, onSubmit, todo}: TodoFormType) => {
    const [text, setText] = useState<string>(todo?.description ?? "");

    const validateText = () => {
        if(text.length < 2) {
            Alert.alert("ToDo musí mít minimálně 2 znaky!");
            return;
        }
        onSubmit(text)
    };

    return (<Container>
        <TextInput
            value={text}
            style={styles.textInput}
            multiline
            onChangeText={(newText) => setText(newText)}
        />
        <TodoButton
            title={buttonTitle}
            onPress={() => validateText()}
        />
    </Container>);
};

export default TodoForm;