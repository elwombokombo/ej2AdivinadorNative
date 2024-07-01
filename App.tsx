import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LogicAnswer from './Components/Logic/Logic';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LogicAnswer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
