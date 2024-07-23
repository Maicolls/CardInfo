import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card: React.FC = () => {
  return (
    <View style={styles.cardInfo}>
      <Image style={styles.cardImage} source={require('./Images/linea106_0.jpg')} />
      <Text style={styles.cardTitle}>¿Necesitas ayuda profesional?</Text>
      <Text style={styles.cardText}>
        Aca encontraras la linea de atecion 106 comunicate para que recibas la
        ayuda que necesitas.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    cardInfo: {
      borderWidth: 1,
      borderColor: 'hsl(0, 0%, 80%)',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      padding: 20,
      alignItems: 'center',
      maxWidth: 250,
      margin: 10,
    },
    cardImage: {
      borderRadius: 100, // To make it circular
      marginBottom: 10,
      width: '60%',
      height: undefined,
      aspectRatio: 1, // Keep the aspect ratio of the image
    },
    cardTitle: {
      fontFamily: 'Arial',
      margin: 0,
      color: 'hsl(0, 0%, 20%)',
    },
    cardText: {
      fontFamily: 'Arial',
      color: 'hsl(0, 0%, 30%)',
    },
  });

export default Card;