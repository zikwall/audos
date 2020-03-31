import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

import UISongItem from 'audos/components/ui/UISongItem';

const AudosCurrentPlaylist = ({ theme, onOpenModal, onSelectItem, items }) => {

    const onTouchItemMore = (id, title, author, image) => {
        onOpenModal(id, title, author, image);
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
                        <UISongItem
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

export default AudosCurrentPlaylist;
