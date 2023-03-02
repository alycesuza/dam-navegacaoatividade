import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

const AtvLogin = (props) => {
    console.log(props)
    const navigation = props.navigation
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
        <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
        />
        <Button       
                onPress={() => {
                    console.log('Home')
                    navigation.navigate('Home')
                }}
                title="Login" />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    });

export default AtvLogin;