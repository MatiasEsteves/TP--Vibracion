import React, { useState, useRef } from 'react';
import { View, Button, Vibration, StyleSheet } from 'react-native';

const App = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const vibrationIntervalRef = useRef(null); // Usamos useRef para mantener la referencia del intervalo

  const startVibration = () => {
    if (!isVibrating) {
      setIsVibrating(true);
      Vibration.vibrate([0, 500, 200, 500], true); // Patrón de vibración (opcional)

      // Para mantener vibrando continuamente hasta que se presione el botón de detener
      vibrationIntervalRef.current = setInterval(() => {
        Vibration.vibrate(); // Continúa vibrando
      }, 1000); // Cambia la frecuencia según sea necesario
    }
  };

  const stopVibration = () => {
    if (isVibrating) {
      setIsVibrating(false);
      Vibration.cancel(); // Detiene la vibración
      clearInterval(vibrationIntervalRef.current); // Limpiar el intervalo
      vibrationIntervalRef.current = null; // Restablecer la referencia del intervalo
    }
  };

  const vibrateOnce = () => {
    Vibration.vibrate(500); // Vibrar una vez durante 500 ms
  };

  return (
    <View style={styles.container}>
      <Button title="Iniciar Vibración Continua" onPress={startVibration} disabled={isVibrating} />
      <Button title="Detener Vibración Continua" onPress={stopVibration} disabled={!isVibrating} />
      <Button title="Vibrar Una Vez" onPress={vibrateOnce} />
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
});

export default App;
