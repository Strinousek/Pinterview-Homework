import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type TodoButtonProps = {
    title?: string,
    onPress: () => void,
    style?: {
        button?: StyleProp<ViewStyle>,
        text?: StyleProp<TextStyle>
    }
}

const styles = StyleSheet.create({
    todoButton: {
        width: "80%",
        paddingVertical: 10,
        backgroundColor: "rgba(52, 152, 219,0.3)",
    },
    todoButtonText: {
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Arial",
        fontWeight: "600",
    },
})

const TodoButton = ({title, onPress, style}: TodoButtonProps) => {
    return (<TouchableOpacity
        style={StyleSheet.flatten([styles.todoButton, style?.button])}
        onPress={() => onPress()}>
        <Text style={StyleSheet.flatten([styles.todoButtonText, style?.text])}>{title}</Text>
    </TouchableOpacity>);
};

export default TodoButton