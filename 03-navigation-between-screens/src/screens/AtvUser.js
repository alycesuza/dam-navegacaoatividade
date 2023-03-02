import React from 'react'
import { Text, StyleSheet, View} from 'react-native'


const AtvAbout = () => {
 
    const namecomplete = "Alyce Fernandes"
    const age = "22"
    const email = "alyce.fernandes@estudante.ifgoiano.edu.br"

    return (
        <View>
            <Text style={styles.textnegrite}> Name </Text>
            <Text style={styles.text}> {namecomplete} </Text>
            <Text style={styles.textnegrite}> Age </Text>
            <Text style={styles.text}> {age} </Text>
            <Text style={styles.textnegrite}> Email </Text>
            <Text style={styles.text}> {email} </Text>
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