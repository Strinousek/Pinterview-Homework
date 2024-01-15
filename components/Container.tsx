import React from "react";
import { StyleSheet, View } from "react-native";

type ContainerPropsType = {
    children: React.ReactNode,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#ecf0f1",
    },
});

const Container = ({children}: ContainerPropsType) => {
    return (<View style={styles.container}>
        {children}
    </View>);
};

export default Container;