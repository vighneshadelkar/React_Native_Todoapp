import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Button, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';
;

export default function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  const handleInput = () => {
    Keyboard.dismiss();
    if (task) {
      setList([...list, task]);
      setTask(null);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.sectionTitle}>
          {/* <Text>Tpdays task</Text> */}
          <Text style={styles.header}>Todo list:</Text>
          <ScrollView style={styles.items}>
            {
              list.map((item, index) => {
                return <Task key={index} text={item} />
              })
            }
          </ScrollView >
        </View>
      </View>
      <KeyboardAvoidingView style={styles.inputView}>
        <TextInput
          placeholder='write a text'
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}>
        </TextInput>
        <Button title='+' onPress={handleInput} style={styles.button} color={'#007AFF'} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    borderRadius: "50%",
    borderColor: "black",
    borderWidth: 3,
    width1:10,
    height: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  items: {
    marginTop: 20,
  },
  input: {
    padding: 15,
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    // marginEnd: 10,
  },
  inputView: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});
