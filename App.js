import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nama : S. Ibnu Romadhon</Text>
      <Text style={styles.text}>NPM : 223510579</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a39f9e', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '80%', 
  },
  box1: {
    backgroundColor: 'red', 
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  box2: {
    backgroundColor: 'green', 
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
