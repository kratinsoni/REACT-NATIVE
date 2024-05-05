import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Hello, FlatCards!</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.whiteText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>Red</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  whiteText: {
    color: 'white',
  },
});

export default FlatCards;
