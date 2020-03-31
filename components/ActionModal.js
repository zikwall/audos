import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlaylistItemMore from 'audos/components/PlaylistItemMore';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';

const ActionItem = ({ onPress, title, icon }) => (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <View style={{ width: 20, alignItems: 'center' }}>
            <Icon name={icon} size={20} color={'#46b3e6'}/>
        </View>
        <Text style={[ iOSUIKit.callout, { color: '#fff', paddingLeft: 20 } ]}>
            { title }
        </Text>
    </TouchableOpacity>
);

ActionItem.defaultProps = {
    onPress: () => {}
};

const ActionModal = ({ onCloseModal, items, itemsIcons, current }) => {
    return (
        <View style={{ flex: 1, paddingTop: 10, }}>
            <View style={{
                backgroundColor: '#222831',
                paddingHorizontal: 10,
                paddingBottom: 10
            }}>
                <PlaylistItemMore
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
                        <ActionItem key={key} title={item.title} icon={item.icon} onPress={item.onPress}/>
                    ))
                }
            </View>
        </View>
    )
};

export default ActionModal;

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
