import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
import HamburgerMenu from './HamburgerMenu';
import ArrowMenu from './ArrowMenu';

// Component for creating the header bar
const Header = ({ 
    style, 
    hamburgerMenuColor, 
    textStyle, 
    text, 
    onMenuPress, 
    hideHamburgerMenu, 
    showBackButton, 
    onBackButtonPress 
}) => {
    if (!hideHamburgerMenu) {
        return (
            <View style={[styles.viewStyle, style]}>
                <HamburgerMenu 
                    style={styles.hamburgerMenuStyle} 
                    color={hamburgerMenuColor} 
                    onPress={onMenuPress} 
                />
                <Text style={[styles.textStyle, textStyle]}>{text}</Text>
            </View>
        ); 
    } else if (showBackButton) {
        return (
            <View style={[styles.viewStyle, style]}>
                <ArrowMenu onPress={onBackButtonPress} style={styles.backButtonStyle} />
                <Text style={[styles.textStyle, textStyle]}>{text}</Text>
            </View>
        ); 
    }
    return (
        <View style={[styles.viewStyle, style]}>
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#2D60A8',
        height: 50 + StatusBar.currentHeight,
        paddingTop: 5 + StatusBar.currentHeight,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 25,
        justifyContent: 'center',
        paddingLeft: 20,
        color: 'white',
    },
    hamburgerMenuStyle: {
        marginLeft: 10
    },
    backButtonStyle: {
        marginLeft: 15,
        marginTop: 5
    }
});

export { Header };
