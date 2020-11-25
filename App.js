import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Other from './src/screens/Other';

const Stack = createStackNavigator();
class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Other" component={Other} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default App;
