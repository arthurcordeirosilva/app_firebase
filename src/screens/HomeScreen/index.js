import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image 
            animation="flipInY"
            source={require('../../assets/Bazinga.jpg')} 
            style={{ width: '100%' }}
            resizeMode="contain"
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
