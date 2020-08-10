import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeachItem from '../../components/TeacherItem';

function Favorites() {
    return ( 
        <View style={styles.container} >
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeachItem />
                <TeachItem />
                <TeachItem />
                <TeachItem />
                <TeachItem />

            </ScrollView>
        </View>
    );
}

export default Favorites;