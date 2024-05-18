import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Hscreen from '../screens/Hscreen';
import MapScreen from '../screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
export default function HomeScreen() {
    const stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer independent={true}>
                <KeyboardAvoidingView
                    behavior={'height'}
                    keyboardVerticalOffset={-120}
                    style={{ flex: 1 }}
                >
                    <stack.Navigator>
                        <stack.Screen name="HomeScreen" component={Hscreen} options={{ headerShown: false }} />
                        <stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
                    </stack.Navigator>
                </KeyboardAvoidingView>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    container: {
        flex: 1,
        backgroundColor: '#a064ff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    }
});
