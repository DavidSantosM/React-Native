import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

const HelloText=({children,...otherProps})=>(
  <Text {...otherProps}>{children}</Text>
);

const App = () =>(
   <View style={styles.container}>
      <HelloText>Hola Capgemini!</HelloText>
      <HelloText style={styles.text}> 
      Empezando un viaje sin retorno, a divertirse y no complicarse
      </HelloText>
      <StatusBar style="auto" />
      <Button title='tap me!'/>
    </View>
);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop: '5%'
  }
});
