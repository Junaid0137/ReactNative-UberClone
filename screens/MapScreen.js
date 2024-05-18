import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ position: "absolute", zIndex: 50, shadowColor: "black" }}>
                <Icon name="menu" type="feather" color="black" size={30} style={{ padding: 10, marginLeft: 10, borderRadius: 100 }} />
            </TouchableOpacity>
            <View style={{ height: 400 }}>
                <Map />
            </View>
            <Stack.Navigator>
                <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});
