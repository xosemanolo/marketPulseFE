import { View, Text, StyleSheet } from 'react-native';

function Timestamp({ timestamp }) {
  return (
    <View style={styles.timestampContainer}>
      <Text style={styles.textTimestamp}>DATA DELAYED: {timestamp}</Text>
    </View>
  );
}

export default Timestamp;

const styles = StyleSheet.create({
  textTimestamp: {
    color: '#dbd8e3',
    fontSize: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timestampContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
});
