import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

import { Scheme } from 'audos/components/consts/Color';
import { Width } from 'audos/components/consts/Size';

import UIPlayer from 'audos/components/ui/UIPlayer';
import AudosActionModal from 'audos/components/AudosActionModal';
import UISwiper from 'audos/components/ui/UISwiper';
import AudosCurrentPlaylist from 'audos/components/AudosCurrentPlaylist';
import UIMiniplayer from 'audos/components/ui/UIMiniplayer';
import UIModalizeWrapper from 'audos/components/ui/UIModalizeWrapper';

const AudosPlayer = ({ colorScheme, actionItems, actionItemIcons, items, minimize }) => {
    StatusBar.setBackgroundColor(Scheme[colorScheme].backgroundColor);

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
                    <UIPlayer
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

    if (minimize === true) {
        return <UIMiniplayer />
    }

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: Scheme[colorScheme].backgroundColor,
                paddingBottom: 20,
                justifyContent: 'space-between'
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {}} style={{ width: Width, alignItems: 'center', paddingBottom: 10, paddingTop: 10 }}>
                        <Icon name={'md-arrow-down'} size={15} color={Scheme[colorScheme].primaryColor} />
                    </TouchableOpacity>
                </View>

                <UISwiper
                    ref={ref => swiperRef.current = ref}
                    showsPagination={false}
                    loop={true}
                    index={!!currentSong ? 1 : 2}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                >
                    {renderPlayer()}
                    <View>
                        <AudosCurrentPlaylist
                            theme={Scheme[colorScheme]}
                            onOpenModal={snapBottomSheet}
                            onSelectItem={onSelectSong}
                            items={items}
                        />
                    </View>
                </UISwiper>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingTop: 10
                }}>
                    <Icon name={'ios-shuffle'} size={20} color={Scheme[colorScheme].primaryColor} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingRight: 10 }}>
                            <Icon name={'ios-play'} size={currentPage == 0 ? 20 : 10} color={Scheme[colorScheme].primaryColor} />
                        </View>
                        <View stle={{ paddingLeft: 10 }}>
                            <Icon name={'ios-list'} size={currentPage == 1 ? 20 : 10} color={Scheme[colorScheme].primaryColor} />
                        </View>
                    </View>
                    <Icon name={'ios-refresh'} size={20} color={Scheme[colorScheme].primaryColor} />
                </View>
            </View>

            <UIModalizeWrapper
                referal={bottomSheet}
                adjustToContentHeight
                modalStyle={{ backgroundColor: '#222831' }}
                handleStyle={{ backgroundColor: '#5f6769' }}
            >
                <AudosActionModal
                    onCloseModal={() => closeBottomSheet()}
                    items={actionItems}
                    itemsIcons={actionItemIcons}
                    current={currentSnapedSong}
                />
            </UIModalizeWrapper>
        </>
    )
};

AudosPlayer.defaultProps = {
    minimize: false,
};

AudosPlayer.propTypes = {
    minimize: PropTypes.bool,
};

export default AudosPlayer;
