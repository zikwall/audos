import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UIImage from './UIImage';
import { iOSUIKit } from 'react-native-typography';

const UIAlbumItem = ({ id, title, author, image, year, onSelectSong }) => {

    return (
        <TouchableOpacity onPress={() => onSelectSong(id, title, author, image, year) } style={{ padding: 10 }}>
            <UIImage width={130} height={130} round={8} source={image} />
            <View style={{ width: 130 }}>
                <Text numberOfLines={1} style={[ iOSUIKit.callout, { color: '#fff', paddingTop: 7, flexWrap: 'wrap' } ]}>
                    { title }
                </Text>
                <Text numberOfLines={1} style={[ iOSUIKit.footnote, { color: '#ccc' } ]}>
                    { author }
                </Text>
                {
                    year &&
                    <Text numberOfLines={1} style={[ iOSUIKit.caption2, { color: '#ccc' } ]}>
                        { year }
                    </Text>
                }
            </View>
        </TouchableOpacity>
    )
};

export default UIAlbumItem;
