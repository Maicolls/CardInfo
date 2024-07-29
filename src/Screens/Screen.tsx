import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {NavigationProp} from '@react-navigation/native';



interface ScreenProps {
  navigation: NavigationProp<any>;
  name: string;
}

const Screen: React.FC<ScreenProps> = ({navigation, name}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{alignItems: 'flex-end', margin: 16}}>
          <FontAwesome5 
            name="bars" 
            size={24} 
            color="#161924" 
            onPress={navigation.openDrawer} 
          />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>{name} Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Screen;
