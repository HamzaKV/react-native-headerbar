/**
 * From: https://github.com/fattahmuhyiddeen/react-native-arrow
 */
import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity
} from 'react-native';

// Component to create back arrow on header
const ArrowMenu = ({ size, color, onPress, style }) => {
  const arrowWidth = size / 3.5;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      overflow: 'visible',
      width: size * 1.9,
      height: size * 1.6
    },
    arrowTail: {
      backgroundColor: color,
      width: size * 1.3,
      height: arrowWidth,
      left: size * 0.4,
      borderTopColor: 'transparent',
      borderStyle: 'solid',
      position: 'absolute',
      top: size * 0.65
    },
    arrowHead2: {
      backgroundColor: color,
      width: size,
      height: arrowWidth,
      borderTopColor: 'transparent',
      borderStyle: 'solid',
      transform: [{ rotate: '45deg' }],
      position: 'absolute',
      top: size * 0.9
    },
    arrowHead1: {
      backgroundColor: color,
      width: size,
      height: arrowWidth,
      borderTopColor: 'transparent',
      borderStyle: 'solid',
      transform: [{ rotate: '135deg' }],
      position: 'absolute',
      top: size * 0.4
    }
  });

  return (
    <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
      <View style={styles.arrowHead1} />
      <View style={styles.arrowHead2} />
      <View style={styles.arrowTail} />
    </TouchableOpacity>
  );
};

ArrowMenu.defaultProps = {
  size: 15,
  color: 'white'
};
export default ArrowMenu;
