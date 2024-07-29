import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {DrawerNavigatorItemsProps} from 'react-navigation-drawer/lib/typescript/src/types';



interface SidebarProps extends DrawerNavigatorItemsProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <ScrollView>
      <ImageBackground 
        source={require('../Images/SiderBar.jpg')} 
        style={{width: undefined, height: 200, paddingTop: 48}}>
        <Image
          source={require('../Images/Profile.jpg')}
          style={styles.profile}
        />
        <Text style={styles.name}>MamaHuevo</Text>
      </ImageBackground>
      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
});

export default Sidebar;
//quede en el minuto 6:10 Slide In Drawer Navigation in React Native canal DesingIntoCode