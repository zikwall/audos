import React, { useRef } from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Slider from '@react-native-community/slider';
import {iOSUIKit} from 'react-native-typography';
import Icon from 'react-native-vector-icons/Fontisto';
import ModalizeWrapper from 're-player-music/components/ModalizeWrapper';
import ActionModal from 're-player-music/components/ActionModal';

const { width } = Dimensions.get('window');

const Player = ({ onOpenModal }) => {
    return (
        <>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ width: 300, height: 300, borderRadius: 2 }}
                        resizeMode="contain"
                        source={{ uri: 'https://static.mp3xa.cc/album_images/400x400/nurminskijj-pacany-s-ulic-vybivajutsja-v-ljudi.jpg' }}
                    />

                    <Slider
                        style={{width: width - 30, height: 30}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#46b3e6"
                        maximumTrackTintColor="#ccf0e1"
                        thumbTintColor={'#46b3e6'}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={[ iOSUIKit.caption2,  { color: '#fff' } ]}>
                        0:01
                    </Text>
                    <Text style={[ iOSUIKit.caption2,  { color: '#fff' } ]}>
                        -03:09
                    </Text>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center', paddingBottom: 65, paddingTop: 65 }}>
                    <Text style={[ iOSUIKit.title3Emphasized, { color: '#fff' } ]}>
                        Друг
                    </Text>
                    <Text style={[ iOSUIKit.caption1, { color: '#46b3e6', paddingTop: 10 } ]}>
                        Нурминский
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => {}} style={{ paddingRight: 50, paddingLeft: 10 }}>
                        <Icon name={'download'} size={15} color={'#fff'} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 10 }}>
                            <Icon name={'backward'} size={15} color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 40, paddingRight: 30 }}>
                            <Icon name={'play'} size={30} color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 10 }}>
                            <Icon name={'forward'} size={15} color={'#fff'} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {
                        onOpenModal();
                    }} style={{ paddingLeft: 50, paddingRight: 10 }}>
                        <Icon name={'more-v-a'} size={15} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
};

export default Player;
