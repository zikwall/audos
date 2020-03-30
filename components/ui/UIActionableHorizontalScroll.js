import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

const UIActionableHorizontalScroll = ({ label, actionLabel, onActionLabelTouch, children }) => {

    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                {
                    !!label &&
                    <Text style={[ iOSUIKit.title3Emphasized, { color: '#fff' } ]}>
                        { label }
                    </Text>
                }
                {
                    !!actionLabel &&
                    <TouchableOpacity onPress={onActionLabelTouch}>
                        <Text style={[ iOSUIKit.footnote, { color: '#46b3e6' } ]}>
                            { actionLabel }
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { children }
            </ScrollView>
        </View>
    )
};

export default UIActionableHorizontalScroll;
