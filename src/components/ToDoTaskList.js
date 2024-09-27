import React, {useEffect, useState} from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from "@react-native-firebase/firestore"
import ToDoTask from "./ToDoTask";



const ToDoTaskList = () =>{
  const [arrayTask, setTask] = useState([]);

  useEffect(() => {
    const tasks = firestore()
      .collection('listTask')
      .onSnapshot(querySnapshot =>{
      const taskk = [];
      querySnapshot.forEach(documentSnapshot => {
        taskk.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setTask(taskk);
    });

    return () => tasks();
    }, []);

  return (
    <SafeAreaView>
        <FlatList 
          data={arrayTask}
          renderItem={(oneTask) => 
          <ToDoTask 
            name={oneTask.item.name}
            key={oneTask.index} 
            description={oneTask.item.description}
            check={oneTask.item.check}
            id={oneTask.item.key}
          />}
          keyExtractor={(item) => item.key}
        />
    </SafeAreaView>
  );
};

export default ToDoTaskList;

