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
      {' '}
      {/* Aca se llama al evento TouchableOpacity como padre para que este sea el padre en todas las tarjetas que se estan implementando */}
      <ScrollView style={styles.cardInfo}>
        {' '}
        {/*En este evento se debe dejar al igual que el padre debido a que es el que nos permite porder dar el eventro scroll para deslizar las tarjetas */}
        <Image style={styles.cardImage} source={imageSource} />{' '}
        {/*esto como es evidente es para las imagenes de las tarjetas */}
        <Text style={styles.cardTitle}>{cardTitle}</Text>{' '}
        {/*de igual manera que el apartado de las imagenes tanto esta liena 34 como la 35 son quienes contienen el titulo de las tarjetas y el texto mismo */}
        <Text style={styles.cardText}>{cardText}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
};

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

export default Card;