import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const AtvHome = (props) => {
    console.log(props)
    const navigation = props.navigation
    const name = "Alyce"

    return (
        <View>
            <Text style={styles.text}> Welcome {name} to our fist project. </Text>
            <Text style={styles.text}> Now we can navigate between screens! </Text>
            <Text style={styles.text}> How are you feeling? </Text>
            <Button
                onPress={() => {
                    console.log('User')
                    navigation.navigate('User')
                }}
                title="User details" />
             
            <Button       
                onPress={() => {
                    console.log('About')
                    navigation.navigate('About')
                }}
                title="About" />

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    }
})

export default AtvHome