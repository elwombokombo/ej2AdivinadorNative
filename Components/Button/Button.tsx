import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

type ButtonType = 'MAYOR' | 'MENOR' | 'IGUAL';

interface ButtonComponentProps extends TouchableOpacityProps {
  tipo: ButtonType;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ tipo, onPress, ...props }) => {
  const buttonStyles: Record<ButtonType, { backgroundColor: string }> = {
    MAYOR: { backgroundColor: 'green' },
    MENOR: { backgroundColor: 'red' },
    IGUAL: { backgroundColor: 'yellow' },
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles[tipo]]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.buttonText, tipo === 'IGUAL' && styles.clearButtonText]}>
        {tipo}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  clearButtonText: {
    color: 'black',
  },
});

export default ButtonComponent;
