import { StyleSheet, Text, View,Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course goal!' />
      <Button title='Add goal!'/>
     </View>
     <View style={styles.goalsContainer}>
      <Text>List of goals...</Text>
     </View>
    </View>
  );
}


const styles = StyleSheet.create({

  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:10,
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth:2,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 10
  },
  goalsContainer: {
    flex: 10
  },
});
  