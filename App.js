import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import DataContainer from './components/DataContainer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Title>MARKET MATRIX LABS</Title> */}
      <Title>MARKET BREADTH INDICATOR</Title>
      <DataContainer />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
