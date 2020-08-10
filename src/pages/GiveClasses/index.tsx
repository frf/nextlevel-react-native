import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const {goBack} = useNavigation();

    function hadlenavigateBack() {
        goBack();
    }

    return ( 
        <View style={styles.container} >
            <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title} >Que ser um Proffy?</Text>
                <Text style={styles.description} >Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
            </ImageBackground>

            <RectButton onPress={hadlenavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;