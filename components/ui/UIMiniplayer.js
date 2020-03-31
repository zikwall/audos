import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';

const UIMiniplayer = ({ onPlayPause }) => {
    return (
        <View style={{
            backgroundColor: '#3c4245',
            height: 40,
            width: '100%',
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Icon name={'play'} size={15} color={'#46b3e6'} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[ iOSUIKit.footnote, { color: '#fff' } ]}>
                        Друг
                    </Text>
                    <Text style={[ iOSUIKit.caption2, { color: '#ccc' } ]}>
                        Нурминский
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Icon name={'close-a'} size={15} color={'#ccc'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UIMiniplayer;
