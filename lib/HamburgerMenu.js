import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';

// Component to create the Hamburger Menu in the header bar
const HamburgerMenu = (props) => {
        let { color } = props;

        if (color == null) {
            color = 'black';
        }

        return (
            <TouchableOpacity 
            onPress={() => { props.onPress(); }}
            >
                <View 
                    style={[{
                        width: 35,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 35,
                    }, props.style]}
                >
                    <View 
                        style={{
                            height: 3,
                            marginLeft: 0,
                            width: 25,
                            marginBottom: 0,
                            backgroundColor: color,
                        }} 
                    />
                    <View 
                        style={{
                            height: 3,
                            width: 25,
                            opacity: 1,
                            backgroundColor: color,
                            marginTop: 4 
                        }}
                    />
                    <View 
                        style={{
                            height: 3,
                            marginLeft: 0,
                            width: 25,
                            backgroundColor: color,
                            marginTop: 4,
                        }} 
                    />
                </View>
            </TouchableOpacity>
        );
};

export default HamburgerMenu;
