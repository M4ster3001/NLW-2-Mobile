import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler'

import {Feather} from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

function TeacherList() {
    const [ isFiltersVisible, setIsFiltersVisible ] = useState(false)

    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function LoadFavorites() {

        AsyncStorage.getItem('favorites')
        .then( resp => {
            
            if( resp ) {
                const favoritedTeachers = JSON.parse(resp)
                const favoritedteachersIDs = favoritedTeachers.map( (teacher: Teacher) => { return teacher.id } )
                
                setFavorites(favoritedteachersIDs)
            }
        })
    }
        
    function handleToggleFIlterVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit() {
        LoadFavorites()

        const data = {subject, week_day, time}

        await api.get('classes', {params: data})
        .then( resp => {
            console.log(resp)
            setTeachers(resp.data)
            setIsFiltersVisible(false)
        } )
        .catch( err => {

            console.log(err)
        } )
    }

    return (
    <View style={styles.container} >
        <PageHeader 
            title="Proffys disponíveis"
            headerRight={(
                <BorderlessButton onPress={handleToggleFIlterVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}
        >
        { isFiltersVisible && ( 
            <View style={styles.searchForm} >
                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                    style={styles.input}
                    value={subject}
                    onChangeText={ text => setSubject(text) }
                    placeholder="Qual a matéria?"
                    placeholderTextColor="#c1bccc"
                />

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            value={week_day}
                            onChangeText={ text => setWeekDay(text) }
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            textContentType="password"
                            style={styles.input}
                            value={time}
                            onChangeText={ text => setTime(text) }
                            placeholder="Qual o horário?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>
                </View>

                <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
        )}
        </PageHeader>

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
        >
            {   teachers &&
                teachers.map( (teacher: Teacher, key) => {
                    return (
                            <TeacherItem 
                                key={key} 
                                teacher={teacher} 
                                favorited={ favorites.includes(teacher.id) } 
                            />
                            )
                } )
            }

        </ScrollView>
    </View>
    )
}

export default TeacherList