import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Player from 're-player-music/components/Player';

import Icon from 'react-native-vector-icons/Ionicons';
import ActionModal from 're-player-music/components/ActionModal';
import ModalizeWrapper from 're-player-music/components/ModalizeWrapper';
import {Modalize} from 'react-native-modalize';

const { width } = Dimensions.get('window');

const RePlayerMusic = () => {
    StatusBar.setBackgroundColor('#121212');

    const bottomSheet = React.createRef();

    const snapBottomSheet = () => {
        if (bottomSheet.current) {
            bottomSheet.current.open();
        }
    };

    const closeBottomSheet = () => {
        if (bottomSheet.current) {
            bottomSheet.current.close();
        }
    };

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: '#121212',
                paddingHorizontal: 20,
                paddingBottom: 20,
                justifyContent: 'space-between'
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {}} style={{ width: width, alignItems: 'center', paddingBottom: 10, paddingTop: 10 }}>
                        <Icon name={'md-arrow-down'} size={15} color={'#fff'} />
                    </TouchableOpacity>

                    <Player onOpenModal={snapBottomSheet}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Icon name={'ios-shuffle'} size={20} color={'#fff'} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingRight: 10 }}>
                            <Icon name={'ios-play'} size={15} color={'#fff'} />
                        </View>
                        <View stle={{ paddingLeft: 10 }}>
                            <Icon name={'ios-list'} size={15} color={'#fff'} />
                        </View>
                    </View>
                    <Icon name={'ios-refresh'} size={20} color={'#fff'} />
                </View>
            </View>
            
            <ModalizeWrapper
                referal={bottomSheet}
                snapPoint={350}
            >
                <ActionModal
                    onCloseModal={() => closeBottomSheet()}
                />
            </ModalizeWrapper>
        </>
    )
};

export default RePlayerMusic;
