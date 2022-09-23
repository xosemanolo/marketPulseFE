import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
const axios = require('axios');
import Alert from './Alert';
import Odometer from './Odometer';
import IndexNHNLDataContainer from './IndexNHNLDataContainer';
import LowryResearchPaper from './LowryResearchPaper';
import Timestamp from './Timestamp';

const URL =
  'https://www.wsj.com/market-data/stocks?id=%7B%22application%22%3A%22WSJ%22%2C%22marketsDiaryType%22%3A%22overview%22%7D&type=mdc_marketsdiary';

function DataContainer() {
  const [nasdaqHigh, setNasdaqHigh] = useState([]);
  const [nyseHigh, setNYSEHigh] = useState([]);
  const [nasdaqLow, setNasdaqLow] = useState([]);
  const [nyseLow, setNYSELow] = useState([]);
  const [timestamp, setTimestamp] = useState([]);
  const [percentageUp, setPercentageUp] = useState([]);
  const [percentageDown, setPercentageDown] = useState([]);

  async function updateData() {
    try {
      const result = await axios.get(URL);

      const {
        data: {
          data: { instrumentSets, timestamp },
        },
      } = result;

      const NASDAQadv = instrumentSets[0].instruments[0].NASDAQ;
      const NYSEadv = instrumentSets[0].instruments[0].NYSE;

      const NASDAQdec = instrumentSets[0].instruments[1].NASDAQ;
      const NYSEdec = instrumentSets[0].instruments[1].NYSE;

      const NASDAQunch = instrumentSets[0].instruments[2].NASDAQ;
      const NYSEunch = instrumentSets[0].instruments[2].NYSE;

      const NASDAQtot = instrumentSets[0].instruments[3].NASDAQ;
      const NYSEtot = instrumentSets[0].instruments[3].NYSE;

      const NASDAQhi = instrumentSets[1].instruments[0].NASDAQ;
      const NYSEhi = instrumentSets[1].instruments[0].NYSE;
      const NASDAQlo = instrumentSets[1].instruments[1].NASDAQ;
      const NYSElo = instrumentSets[1].instruments[1].NYSE;

      const NYSETotalVolume =
        instrumentSets[2].instruments[0].NYSE.split(',').join('');
      const NYSEUpVolume =
        instrumentSets[2].instruments[1].NYSE.split(',').join('');
      const NYSEDownVolume =
        instrumentSets[2].instruments[2].NYSE.split(',').join('');

      const up = Number(NYSEUpVolume);
      const down = Number(NYSEDownVolume);

      const nyseUpVolumePercentage = (up / (up + down)) * 100;
      const nyseDownVolumePercentage = (down / (up + down)) * 100;

      setNasdaqHigh(NASDAQhi);
      setNasdaqLow(NASDAQlo);
      setNYSEHigh(NYSEhi);
      setNYSELow(NYSElo);
      setTimestamp(timestamp);
      // setPercentageUp(nyseUpVolumePercentage.toFixed(2));
      setPercentageUp(95);
      setPercentageDown(nyseDownVolumePercentage.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateData();
  }, []);

  console.log(timestamp);

  return (
    <View>
      <Odometer mark={percentageUp} />

      <View style={styles.percentageContainer}>
        {percentageUp >= 80 ? (
          <Text style={styles.percentageUp}>{percentageUp}% NYSE ▲ VOLUME</Text>
        ) : percentageDown >= 80 ? (
          <Text style={styles.percentageDown}>
            {percentageDown}% NYSE ▼ VOLUME
          </Text>
        ) : (
          <Text style={styles.percentageNeutral}>
            {percentageUp}% ◀︎ ▶︎ NYSE VOLUME
          </Text>
        )}
      </View>

      <IndexNHNLDataContainer
        nasdaqHigh={nasdaqHigh}
        nasdaqLow={nasdaqLow}
        nyseHigh={nyseHigh}
        nyseLow={nyseLow}
      />

      {/* <Button onPress={updateData} title='UPDATE' /> */}

      {percentageDown >= 80 && percentageDown < 90 ? (
        <Alert>HIGH SELLING PRESSURE</Alert>
      ) : percentageDown >= 90 ? (
        <Alert>EXHAUSTIVE SELLING</Alert>
      ) : percentageUp >= 80 && percentageUp < 90 ? (
        <Alert>HIGH BUYING PRESSURE</Alert>
      ) : percentageUp >= 90 ? (
        <Alert>BUYING THRUST</Alert>
      ) : null}
      <LowryResearchPaper />
      <Timestamp timestamp={timestamp} />
    </View>
  );
}

export default DataContainer;

const styles = StyleSheet.create({
  percentageContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  percentageUp: {
    color: 'green',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'green',
    textShadowOffset: { width: -1, height: 0.5 },
    textShadowRadius: 4,
  },
  percentageNeutral: {
    color: '#dbd8e3',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: '#dbd8e3',
    textShadowOffset: { width: -1, height: 0.5 },
    textShadowRadius: 4,
  },
  percentageDown: {
    color: 'red',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'red',
    textShadowOffset: { width: -1, height: 0.5 },
    textShadowRadius: 4,
  },

  dataTitle: {
    fontSize: 15,
    color: 'white',
  },
});
