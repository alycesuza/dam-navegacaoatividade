import React from 'react'
import { Text, StyleSheet, View} from 'react-native'


const AtvAbout = () => {
 
    const namecomplete = "Alyce Fernandes"

    return (
        <View>
            <Text style={styles.textnegrite}> About </Text>
            <Text style={styles.text}> Developed by {namecomplete} </Text>
            <Text style={styles.textnegrite}> Version </Text>
            <Text style={styles.text}> FistApp Version 1.0 </Text>
        </View>
        )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    },
    textnegrite: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default AtvAbout