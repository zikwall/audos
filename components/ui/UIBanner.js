import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {iOSUIKit} from 'react-native-typography';

const UIBanner = ({ title, subtitle, buttonIcon, buttonTitle, onTouchButton }) => {
    return (
        <View style={{ marginVertical: 20, padding: 20, margin: 10, backgroundColor: '#63707e', borderRadius: 10 }}>
            <View style={{ paddingBottom: 20, width: 190 }}>
                <Text style={[ iOSUIKit.body, { color: '#fff' } ]}>
                    { title }
                </Text>
                <Text numberOfLines={2} style={[ iOSUIKit.footnote, { paddingTop: 10, color: '#ccc' } ]}>
                    { subtitle }
                </Text>
            </View>

            {
                buttonTitle &&
                <TouchableOpacity onPress={onTouchButton} activeOpacity={0.8}>
                    <View style={{ backgroundColor: '#d7ecff', flexDirection: 'row', padding: 10, borderRadius: 10, width: 140 }}>
                        <Icon name={buttonIcon} size={20} color={'#121212'} />
                        <Text style={[ iOSUIKit.body, { paddingLeft: 15 } ]}>
                            { buttonTitle }
                        </Text>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
};

export default UIBanner;
