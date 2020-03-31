import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';
import UIPlaylistItemMore from 'audos/components/ui/UIPlaylistItemMore';
import UIActionMenuItem from 'audos/components/ui/UIActionMenuItem';

const AudosActionModal = ({ onCloseModal, items, itemsIcons, current }) => {
    return (
        <View style={{ flex: 1, paddingTop: 10, }}>
            <View style={{
                backgroundColor: '#222831',
                paddingHorizontal: 10,
                paddingBottom: 10
            }}>
                <UIPlaylistItemMore
                    title={current.title}
                    author={current.author}
                    image={current.image}
                />

                {
                    !!itemsIcons &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15 }}>
                        <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 20 }}>
                            <Icon name={'download'} size={20} color={'#ccc'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 20 }}>
                            <Icon name={'podcast'} size={20} color={'#ccc'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 20 }}>
                            <Icon name={'share-a'} size={20} color={'#ccc'} />
                        </TouchableOpacity>
                    </View>
                }
            </View>

            <View style={{ backgroundColor: '#3c4245', paddingVertical: 10, paddingHorizontal: 20 }}>
                {
                    items.map((item, key) => (
                        <UIActionMenuItem key={key} title={item.title} icon={item.icon} onPress={item.onPress}/>
                    ))
                }
            </View>
        </View>
    )
};

export default AudosActionModal;

const styles = StyleSheet.create({
    content__button: {
        paddingVertical: 15,

        width: '100%',

        backgroundColor: '#333',
        borderRadius: 6,
    },
    content__buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});
