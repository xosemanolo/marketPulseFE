import { View, Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    borderColor: '#2772db',
    borderWidth: 2,
    padding: 5,
    height: 100,
    marginTop: 50,
    width: '98%',
    marginLeft: 3,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#2772db',
    position: 'absolute',
    shadowColor: '#2272db',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 8,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    shadowColor: '#FFFFF',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    alignContent: 'center',
    padding: 3,
  },
});
