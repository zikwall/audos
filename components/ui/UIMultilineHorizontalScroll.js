import React from 'react';
import { View, Text } from 'react-native';
import UIActionableHorizontalScroll from './UIActionableHorizontalScroll';
import UISongItem from './UISongItem';

const noop = () => {};

const UIMultilineHorizontalScroll = ({ label, actionLabel, onActionLabelTouch, items, countInGroup }) => {
    const preRenderItems = () => {
        let groupingItems = [];

        let c = 0;

        for (let group in items) {
            if (group % countInGroup == 0) {
                c++;
            }

            if (typeof groupingItems[c] === 'undefined') {
                groupingItems[c] = [];
            }

            let item = items[group];

            groupingItems[c].push(
                <UISongItem
                    key={group}
                    title={item.title}
                    author={item.author}
                    image={item.image}
                    onToucItem={noop}
                    onTouchMore={noop}
                    timeVisible={false}
                />
            );
        }

        return groupingItems.map(( group, key ) => (
            <View key={key} style={{
                padding: 10
            }}>
                { group }
            </View>
        ));
    };

    return (
        <UIActionableHorizontalScroll
            label={label}
            actionLabel={actionLabel}
            onActionLabelTouch={onActionLabelTouch}
        >
            {
                preRenderItems()
            }
        </UIActionableHorizontalScroll>
    )
};

export default UIMultilineHorizontalScroll;
