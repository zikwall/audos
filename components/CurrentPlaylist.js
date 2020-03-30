import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

import PlaylistItem from '../components/PlaylistItem';

const CurrentPlaylist = ({ theme, onOpenModal, onSelectItem, items }) => {

    const onTouchItemMore = () => {
        onOpenModal();
    };

    const onTouchItem = (id, title, author, image) => {
        onSelectItem(id, title, author, image);
    };

    return (
        <>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={[ iOSUIKit.title3, { color: theme.primaryColor } ]}>
                    Далее
                </Text>
                <Text style={[ iOSUIKit.callout, { color: theme.thirdColor, paddingTop: 5 } ]}>
                    Моя музыка
                </Text>
            </View>

            <View style={{ paddingVertical: 5 }} />

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ paddingHorizontal: 20 }}>
                    {items.map((item, key) => (
                        <PlaylistItem
                            key={key}
                            onTouchMore={onTouchItemMore}
                            onToucItem={onTouchItem}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            author={item.author}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
};

export default CurrentPlaylist;
