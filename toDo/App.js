import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { theme } from './colors';

export default function App() {
	const [working, setWorking] = useState(true);
	const [text, setText] = useState("");
	const [toDos, setToDos] = useState({});
	const trevel = () => setWorking(false);
	const work = () => setWorking(true);
	const onChangeText = (payload) => setText(payload);
	const addToDo = () => {
		if (text === "")
			return;
		const newToDos = {
			...toDos, 
			[Date.now()]: { text, working }
		};
		setToDos(newToDos);
		setText("");
	}
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
	  <View style={styles.header}>
		<TouchableOpacity onPress={work}>
          <Text
            style={{ 
				...styles.btnText, 
				color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
		</TouchableOpacity>
 		<TouchableOpacity onPress={trevel}>
			<Text 
			style={{
				...styles.btnText, 
				color: !working ? "white" : theme.grey}}
			>Trevel</Text>
		</TouchableOpacity>
	  </View>
		<TextInput 
		//keyboardType='number-pad'
		onSubmitEditing={addToDo}
		onChangeText={onChangeText}
		returnKeyType='done'
		value={text}
		//multiline
		placeholder={working ? "Add a To Do" : "Where do you want a go?"} 
		style={styles.input}></TextInput>
		<ScrollView>
		{Object.keys(toDos).map((key) => 
			toDos[key].working === working ? (
          <View style={styles.toDo} key={key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
          </View>
        ) : null )}
		</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
	paddingHorizontal: 20,

  },
  header: {
	justifyContent:"space-between",
	flexDirection:"row",
	marginTop: 100,
  },
  btnText: {
	fontSize:44,
	fontWeight:"600",
  },
  input: {
	backgroundColor:"white",
	paddingVertical:15,
	paddingHorizontal:20,
	borderRadius:30,
	marginVertical:20,
	fontSize:15,
  },
  toDo: {
	backgroundColor: theme.toDoBg,
	marginBottom: 10,
	paddingVertical: 10,
	paddingHorizontal: 20,
	borderRadius: 15,
  }, 
  toDoText : {
	color:"white",
	fontSize: 20,
	fontWeight:"500",
  },
});
