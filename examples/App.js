import React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AudosPlayer from 'audos';
import { UIPlaylisScene } from 'audos';
import { playlist, actionItems } from './Data';

function PlayerScreen({ navigation }) {
    navigation.setOptions({ tabBarVisible: false });

    const navigateToUI = () => {
        navigation.navigate('UI')
    };

    return (
        <View style={{ flex: 1 }}>
            <AudosPlayer
                colorScheme={'Dark'}
                actionItems={actionItems}
                items={playlist}
                minimize={false}
                onTopPress={navigateToUI}
            />
        </View>
    );
}

function UIScreen() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <UIPlaylisScene
                    colorScheme={'Dark'}
                    items={playlist}
                />
            </ScrollView>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#ccc',
                style:{
                    backgroundColor: '#121212',
                    borderTopColor: '#121212',
                    paddingBottom: 15,
                    paddingHorizontal: 5
                }
            }}
        >
            <Tab.Screen name="Player" component={PlayerScreen} />
            <Tab.Screen name="UI" component={UIScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default App;
