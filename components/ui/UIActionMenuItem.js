import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';

const UIActionMenuItem = ({ onPress, title, icon }) => (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <View style={{ width: 20, alignItems: 'center' }}>
            <Icon name={icon} size={20} color={'#46b3e6'}/>
        </View>
        <Text style={[ iOSUIKit.callout, { color: '#fff', paddingLeft: 20 } ]}>
            { title }
        </Text>
    </TouchableOpacity>
);

UIActionMenuItem.defaultProps = {
    onPress: () => {}
};

export default UIActionMenuItem;
