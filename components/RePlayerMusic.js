import React, { useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { Modalize } from 'react-native-modalize';
import ViewPager from '@react-native-community/viewpager';

import { width, ColorScheme } from './Const';
import Player from './Player';
import ActionModal from '../components/ActionModal';
import ModalizeWrapper from '../components/ModalizeWrapper';
import Swiper from '../components/Swiper';
import CurrentPlaylist from '../components/CurrentPlaylist';

const RePlayerMusic = ({ colorScheme, actionItems, actionItemIcons, items }) => {
    StatusBar.setBackgroundColor(ColorScheme[colorScheme].backgroundColor);

    const [ currentSong, setCurrentSong ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ currentSnapedSong, setCurrentSnapedSong ] = useState(currentSong);

    const swiperRef = React.createRef();
    const bottomSheet = React.createRef();

    const swipeToPlayer = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1);
        }
    };

    const snapBottomSheet = (id, title, author, image) => {
        setCurrentSnapedSong({ id: id, title: title, author: author, image: image });

        if (bottomSheet.current) {
            bottomSheet.current.open();
        }
    };

    const closeBottomSheet = () => {
        if (bottomSheet.current) {
            bottomSheet.current.close();
        }
    };

    const onSelectSong = (id, title, author, image) => {
        setCurrentSong({
            id: id, title: title, author: author, image: image
        });

        swipeToPlayer();
    };

    const onMomentumScrollEnd = (e, state, context) => {
        setCurrentPage(state.index);
    };

    const renderPlayer = () => {
        if (!!currentSong) {
            return (
                <View>
                    <Player
                        onOpenModal={snapBottomSheet}
                        current={currentSong}
                    />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <IconFontisto name={'applemusic'} size={40} color={'#ccc'} />
            </View>
        )
    };

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: ColorScheme[colorScheme].backgroundColor,
                paddingBottom: 20,
                justifyContent: 'space-between'
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {}} style={{ width: width, alignItems: 'center', paddingBottom: 10, paddingTop: 10 }}>
                        <Icon name={'md-arrow-down'} size={15} color={ColorScheme[colorScheme].primaryColor} />
                    </TouchableOpacity>
                </View>

                <Swiper
                    ref={ref => swiperRef.current = ref}
                    showsPagination={false}
                    loop={true}
                    index={!!currentSong ? 1 : 2}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                >
                    {renderPlayer()}
                    <View>
                        <CurrentPlaylist
                            theme={ColorScheme[colorScheme]}
                            onOpenModal={snapBottomSheet}
                            onSelectItem={onSelectSong}
                            items={items}
                        />
                    </View>
                </Swiper>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingTop: 10
                }}>
                    <Icon name={'ios-shuffle'} size={20} color={ColorScheme[colorScheme].primaryColor} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingRight: 10 }}>
                            <Icon name={'ios-play'} size={currentPage == 0 ? 20 : 10} color={ColorScheme[colorScheme].primaryColor} />
                        </View>
                        <View stle={{ paddingLeft: 10 }}>
                            <Icon name={'ios-list'} size={currentPage == 1 ? 20 : 10} color={ColorScheme[colorScheme].primaryColor} />
                        </View>
                    </View>
                    <Icon name={'ios-refresh'} size={20} color={ColorScheme[colorScheme].primaryColor} />
                </View>
            </View>

            <ModalizeWrapper
                referal={bottomSheet}
                adjustToContentHeight
                modalStyle={{ backgroundColor: '#222831' }}
                handleStyle={{ backgroundColor: '#5f6769' }}
            >
                <ActionModal
                    onCloseModal={() => closeBottomSheet()}
                    items={actionItems}
                    itemsIcons={actionItemIcons}
                    current={currentSnapedSong}
                />
            </ModalizeWrapper>
        </>
    )
};

export default RePlayerMusic;
