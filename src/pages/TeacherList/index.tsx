import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeachItem, {Teacher} from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';

function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function handleFiltersSubmit() {

        const response = await api.get('classes', {
            params: {
                subject,week_day,time
            }
        });

        console.log(response.data);

        setTeachers(response.data);
    }

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    return ( 
        <View style={styles.container} >
            <PageHeader title="Proffys diponíveis" 
            headerRight={(
                <BorderlessButton onPress={handleToggleFilterVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}>
                { isFilterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        placeholderTextColor="#c1bcc"
                        style={styles.input} 
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                value={week_day}
                                onChangeText={text => setWeekday(text)}
                                placeholderTextColor="#c1bcc"
                                style={styles.input} 
                                placeholder="Qual o dia?"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholderTextColor="#c1bcc"
                                style={styles.input} 
                                placeholder="Qual o dia?"
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>Buscar</Text>
                    </RectButton>

                </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>

                {teachers.map((teacher: Teacher) => {
                    return <TeachItem key={teacher.id} teacher={teacher} />
                })}     

            </ScrollView>
        </View>
    );
}

export default TeacherList;