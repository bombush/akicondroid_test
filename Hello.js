import React from 'react';
import { Text } from 'react-native';

export default class Hello extends React.Component {

    render() {
        return (
                <Text>
                    Ahoj kamarade. Jmenuji se {this.props.myName}.
                </Text>
        )
    }
}