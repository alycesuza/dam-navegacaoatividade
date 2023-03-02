import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AtvHome from './src/screens/AtvHome'
import AtvUser from './src/screens/AtvUser'
import AtvLogin from './src/screens/AtvLogin'
import AtvAbout from './src/screens/AtvAbout'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={AtvHome}/>
        <Stack.Screen name="User" component={AtvUser}/>
        <Stack.Screen name="Login" component={AtvLogin}/>
        <Stack.Screen name="About" component={AtvAbout}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}