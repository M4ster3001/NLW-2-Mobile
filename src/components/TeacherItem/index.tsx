import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

import heartOutLine from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler'

function TeacherItem() {

    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'F:/Imagens/wallpapers/203.jpg' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Aldo</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Testando a parte de componente TeacherItem bio
                {'\n'}
                Teste som testando 1 2 3
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/ hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutLine} />
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem