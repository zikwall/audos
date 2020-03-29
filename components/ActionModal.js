import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActionModal = ({ onCloseModal }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.content__subheading}>{'Проверка'.toUpperCase()}</Text>
            <TouchableOpacity style={styles.content__button} activeOpacity={0.9} onPress={onCloseModal}>
                <Text style={styles.content__buttonText}>Открыть доступ!</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ActionModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        padding: 20,
    },
    content__subheading: {
        marginBottom: 10,

        fontSize: 16,
        fontWeight: '600',
        color: '#ccc',
    },
    content__button: {
        paddingVertical: 15,

        width: '100%',

        backgroundColor: '#333',
        borderRadius: 6,
    },
    content__buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});
