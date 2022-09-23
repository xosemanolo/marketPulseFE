import { View, Text, StyleSheet } from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';

function Odometer({ mark }) {
  return (
    <View style={styles.odometerContainer}>
      <Speedometer
        value={mark}
        max={100}
        angle={160}
        accentColor='#f96d00'
        height={150}
      >
        <Background angle={180} color='#dbd8e3' />
        <Arc />
        <Needle />
        <Progress />
        <Marks lineColor='#2772db' color='#2772db' />
        <Indicator>
          {(value, textProps) => (
            <Text
              {...textProps}
              fontSize={50}
              fill='#555'
              x={250 / 2}
              y={100}
              alignmentBaseline='middle'
            >
              {/* {value} */}
            </Text>
          )}
        </Indicator>
      </Speedometer>
    </View>
  );
}

export default Odometer;

const styles = StyleSheet.create({
  odometerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 200,
  },
});
