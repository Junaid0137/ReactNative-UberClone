import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "@/slices/navSlice";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];
const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity disabled={!origin} onPress={() => { navigation.navigate(item.screen) }} style={{ padding: 25, backgroundColor: '#e6e6ea', margin: 4 }}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text style={{ margin: 4, fontSize: 15, fontWeight: 25 }}>{item.title}</Text>
                        <Icon style={{ marginTop: 4, padding: 2, backgroundColor: 'black', width: 30, height: 30, borderRadius: 100 }} name="arrowright" type="antdesign" color="white" />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({});
