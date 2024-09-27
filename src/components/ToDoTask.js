import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import firestore from "@react-native-firebase/firestore";

const ToDoTask = ({ id, name, description, check }) => {
    function checkingTask(){
        firestore().collection('listTask').doc(id).update({ check: !check });
    }
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.status}>{check ? "Completada" : "Pendiente"}</Text>
            <Pressable onPress={checkingTask} style={styles.button}>
                <Text style={styles.buttonText}>{check ? "Marcar como pendiente" : "Marcar como completada"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff', 
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000000', 
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000000',
    },
    status: {
        fontSize: 14,
        marginBottom: 8,
        color: '#000000', 
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default ToDoTask;
