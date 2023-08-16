import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Input.styles';


const Input = ({ text, setText, addTodo }) => {
    const [changeButton, setChangeButton] = useState(false);


    const handleChange = (word) => {
        setText(word);
        if (word !== '') {
            setChangeButton(true);
        } else {
            setChangeButton(false);
        }
    };

    return (
        <View style={styles.bottom_container}>
            <TextInput
                style={styles.todo_input}
                placeholder='Yapılacak...'
                placeholderTextColor='#7b7c7d'
                value={text}
                onChangeText={handleChange}
            />
            <TouchableOpacity
                style={changeButton ? styles.active_button : styles.button}
                disabled={!changeButton}
                onPress={addTodo}
            >
                <Text style={styles.button_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Input;