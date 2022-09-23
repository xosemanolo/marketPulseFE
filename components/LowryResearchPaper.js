import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Linking,
} from 'react-native';

function LowryResearchPaper() {
  function openLink() {
    Linking.openURL('https://docs.cmtassociation.org/docs/2002DowAwardb.pdf');
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={openLink}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textButton}>Lowry Research Paper</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default LowryResearchPaper;

const styles = StyleSheet.create({
  buttonContainer: {
    // marginTop: 40,
    backgroundColor: '#2772db',
    width: '98%',
    marginLeft: 3,
    shadowColor: '#2272db',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 8,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 15,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    shadowColor: 'white',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
