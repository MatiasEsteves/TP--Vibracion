import React from 'react';
import { View, Button, Vibration, StyleSheet } from 'react-native';

const App = () => {
  const handleVibrate = () => {
    Vibration.vibrate(); // Hace vibrar el dispositivo
  };

  return (
    <View style={styles.container}>
      <Button title="Vibrar" onPress={handleVibrate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
