import React from 'react';
import {Pressable, StyleProp, ViewStyle, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  iconName: string;
  onPress: () => void;

  style?: StyleProp<ViewStyle>;
}

export const FAB = ({iconName, onPress, style}: Props) => {
  return (
    <View style={[styles.btn, style]}>
      <Pressable onPress={onPress}>
        <Icon name={iconName} size={30} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    zIndex: 1,
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {width: 4.5, height: 0.27},
    elevation: 5,
  },
});
