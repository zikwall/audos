import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const UIEmptyImage = ({ width, height, isAlbum, round }) => {

    return (
        <View style={{
            height: height,
            width: width,
            borderRadius: round,
            backgroundColor: '#3c4245',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Icon
                name={ isAlbum ? 'play-list' : 'applemusic' }
                size={( width || height ) / 3}
                color={'#ccc'}
            />
        </View>
    );
};

export default UIEmptyImage;
