import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './TodoList.styles';

const TodoList = ({ todos, isDone, deleteTodo }) => {
    return (
        <View>
            <TouchableOpacity
                style={todos.isDone ? styles.doneTodo : styles.todo}
                onPress={() => isDone(todos.id)}
                onLongPress={() => deleteTodo(todos.id)}>
                <Text style={todos.isDone ? styles.doneTodoText : styles.todoText}>
                    {todos.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoList