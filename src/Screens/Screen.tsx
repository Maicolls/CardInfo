import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.Component{
    render(){
        return(){
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin:16}}>
                        <FontAwesome5 name="bars" size={24} color="#161924" 
                        onPress={this.props.navigation.openDrawer} />
                    </TouchableOpacity>
                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <Text style={styles.text}>{this.props.name} Screen </Text>  
                    </View>
                </SafeAreaView>
            </View>


        }
    }
}

export default Screen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500",
    }
})

