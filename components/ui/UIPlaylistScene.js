import React from 'react';
import { View, StatusBar} from 'react-native';
import UIAlbumItem from './UIAlbumItem';
import UIActionableHorizontalScroll from './UIActionableHorizontalScroll';
import UIBanner from './UIBanner';
import UIMultilineHorizontalScroll from './UIMultilineHorizontalScroll';

import { Scheme } from 'audos/components/consts/Color';

const UIPlaylisScene = ({ colorScheme, items }) => {
    StatusBar.setBackgroundColor(Scheme[colorScheme].backgroundColor);

    return (
        <View style={{
            flex: 1,
            backgroundColor: Scheme[colorScheme].backgroundColor,
        }}>
            <UIBanner
                title={'Специально для вас'}
                subtitle={'Ramil\', Gidayyat, Kamaz и другие'}
                buttonTitle={'Слушать'}
                buttonIcon={'applemusic'}
                onTouchButton={() => alert('Доволен?!')}
            />

            <UIActionableHorizontalScroll
                label={'Новые альбомы'}
                actionLabel={'Показать все'}
                onActionLabelTouch={() => alert('Показал!?')}
            >
                {
                    items.map((item, key) => (
                        <UIAlbumItem
                            id={10}
                            title={item.title}
                            author={item.author}
                            year={2020}
                            image={item.image}
                            onSelectSong={() => {}}
                            key={key}
                        />
                    ))
                }
            </UIActionableHorizontalScroll>

            <UIMultilineHorizontalScroll
                label={'Новое'}
                actionLabel={'Слушать все'}
                onActionLabelTouch={() => alert('Показал!?')}
                items={items}
                countInGroup={3}
            />
        </View>

    )
};

export default UIPlaylisScene;
