import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

function TeacherItem() {

    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'F:/Imagens/wallpapers/203.jpg' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.nome}>Aldo</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem