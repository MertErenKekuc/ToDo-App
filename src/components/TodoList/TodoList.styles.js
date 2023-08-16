import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todo: {
        backgroundColor: '#156b7a',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
    },
    doneTodo: {
        backgroundColor: '#37474f',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
    },
    todoText: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 5,
    },
    doneTodoText: {
        color: '#808080',
        textDecorationLine: 'line-through',
        fontSize: 20,
        paddingLeft: 5,
    },
});