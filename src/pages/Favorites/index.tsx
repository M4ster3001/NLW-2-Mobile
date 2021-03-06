import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function Favorites() {
    const [favorites, setFavorites] = useState([])
    
    function LoadFavorites() {

        AsyncStorage.getItem('favorites')
        .then( resp => {
            
            if( resp ) {
                const favoritedTeachers = JSON.parse(resp)
                
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {

        LoadFavorites()
    })

    return <View style={styles.container} >
        <PageHeader title="Meus proffys favoritos" />

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
        >
            
            {
                favorites && 
                favorites.map( (teacher: Teacher, key) => {
                    return (
                        <TeacherItem 
                            key={key} 
                            teacher={teacher} 
                            favorited
                        />
                    )
                } )
            }

        </ScrollView>
    </View>
}

export default Favorites