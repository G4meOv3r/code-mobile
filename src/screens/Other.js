import React from 'react';
import {Button, Text, View} from 'react-native';

class Other extends React.Component {
    render() {
        return(
            <View>
                <Button
                    title="Push to Home"
                    onPress={() => this.props.navigation.push('Home')}
                />
                <Button
                    title="Navigate to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}
export default Other;
