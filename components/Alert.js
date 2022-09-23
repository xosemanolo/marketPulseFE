import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

function Alert({ children }) {
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.alertContainer}>
      <Text style={[styles.alertText, { display: showText ? 'none' : 'flex' }]}>
        ALERT: {children}
      </Text>
    </View>
  );
}

export default Alert;

const styles = StyleSheet.create({
  alertContainer: {
    height: 100,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  alertText: {
    height: 20,
    fontSize: 20,
    color: 'yellow',
    font: 'bold',
    shadowColor: 'yellow',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
  },
});
