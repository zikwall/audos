import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';

import UIImage from '../components/ui/UIImage';
import { width } from '../components/Const';

const PlaylistItemMore = ({ theme, image, title, author, onTouchAngle }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image width={45} height={45} round={5} source={image} />

                <View style={{ paddingHorizontal: 15, width: width * 0.55}}>
                    <Text numberOfLines={1} style={[ iOSUIKit.callout, { color: '#fff', flexWrap: 'wrap' } ]}>
                        { title }
                    </Text>
                    <Text style={[ iOSUIKit.footnote, { color: '#ccc' } ]}>
                        { author }
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => onTouchAngle()} style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Icon name={'angle-right'} size={15} color={'#ccc'} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

PlaylistItemMore.defaultProps = {
    onTouchAngle: () => {}
}

export default PlaylistItemMore;
