import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ButtonComponent from '../Button/Button';

const LogicAnswer = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(getRandomIntInclusive(0, 100));

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = (operation: 'MAYOR' | 'MENOR' | 'IGUAL') => {
    switch (operation) {
      case 'MAYOR':
        setMin(count + 1);
        setCount(getRandomIntInclusive(count + 1, max));
        break;
      case 'MENOR':
        setMax(count - 1);
        setCount(getRandomIntInclusive(min, count - 1));
        break;
      case 'IGUAL':
        Alert.alert("¡Ganaste! Reiniciando el juego...");
        setMin(0);
        setMax(100);
        setCount(getRandomIntInclusive(0, 100));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent tipo="MAYOR" onPress={() => handleClick('MAYOR')} />
        <ButtonComponent tipo="MENOR" onPress={() => handleClick('MENOR')} />
        <ButtonComponent tipo="IGUAL" onPress={() => handleClick('IGUAL')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default LogicAnswer;
