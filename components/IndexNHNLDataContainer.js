import { View, Text, StyleSheet } from 'react-native';

function IndexNHNLDataContainer({ nasdaqHigh, nasdaqLow, nyseHigh, nyseLow }) {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.textHighData}>
        <Text style={styles.textIndexDescription}>
          NASDAQ 52 Week New High's:{' '}
        </Text>
        {nasdaqHigh}
      </Text>
      <Text style={styles.textLowData}>
        <Text style={styles.textIndexDescription}>
          NASDAQ 52 Week New Low's:{' '}
        </Text>
        {nasdaqLow}
      </Text>
      <Text style={styles.textHighData}>
        <Text style={styles.textIndexDescription}>
          NYSE 52 Week New High's:{' '}
        </Text>
        {nyseHigh}
      </Text>
      <Text style={styles.textLowData}>
        <Text style={styles.textIndexDescription}>
          NYSE 52 Week New Low's:{' '}
        </Text>
        {nyseLow}
      </Text>
    </View>
  );
}

export default IndexNHNLDataContainer;

const styles = StyleSheet.create({
  dataContainer: {
    color: '#FFFFFF',
    marginTop: 20,
    backgroundColor: '#222831',
    shadowColor: '#2272db',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderRadius: 8,
    marginLeft: 4,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHighData: {
    color: 'green',
    padding: 8,
  },
  textLowData: {
    color: 'red',
    padding: 8,
  },
  textIndexDescription: {
    color: '#2772db',
  },
});
