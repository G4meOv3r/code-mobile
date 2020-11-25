import React from 'react';
import {Button, Text, View} from 'react-native';

class Home extends React.Component {
    render() {
        return(
            <View>
                <Button
                    title="Push to Other"
                    onPress={() => this.props.navigation.push('Other')}
                />
                <Button
                    title="Navigate to Other"
                    onPress={() => this.props.navigation.navigate('Other')}
                />
            </View>
        )
    }
}
export default Home;
