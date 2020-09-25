import { Platform, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({

    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },
    
    topBar: {
        marginTop: Platform.OS === 'ios' ? 0 :  ( Constants.statusBarHeight - 15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    }

})

export default styles