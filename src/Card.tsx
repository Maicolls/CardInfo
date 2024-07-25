import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

//El llamado que se va arealizar en las tarjetas para que sean despues llamados y modificados en el partado de abajo
interface CardProps {
  imageSource: any; //Aca se indica que es donde se van a llamar las imagenes que se van a atulizar 
  cardTitle: string; //Aca se indica que es ele apratado para el titulo de las  cards
  cardText: string; //Aca se indica que es ele apratado para la informacion  de las lineas de atencion que contiene las  cards
  phoneNumber: string; // Nueva propiedad para el número de teléfono
}

const Card: React.FC<CardProps> = ({
  imageSource, //Aca se llama el interface props para adicionar despues las imagenes
  cardTitle, //Aca se llama el interface props para adicionar despues el titulo
  cardText, // Aca se llama el interface props para adicionar despues el texto
  phoneNumber, //Aca se llama el interface props para adicionar despues la imagenes
}) => {
  // Función para abrir el marcador con el número de teléfono
  const handlePress = () => { 
    Linking.openURL(`tel:${phoneNumber}`); //Aca es donde se define la funcion de LinKing que es una liberia de React-Native para poder interactuar con enlaces de aplicaciones entrantes y salientes 
  };
  return (
    <TouchableOpacity style={styles.cardInfo} onPress={handlePress}> 
      <ScrollView style={styles.cardInfo}>
        <Image style={styles.cardImage} source={imageSource} />
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
};


export default Card;
//este son los estilos quqe se le dan a las distintas tarjetas 
const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor: 'black',
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 1,
    margin: 10,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    marginTop: 5,
  },
});

