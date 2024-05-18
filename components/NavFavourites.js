import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "777",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    },
    // {
    //     id: "999",
    //     icon: "book",
    //     location: "University",
    //     destination: "London Eye, London, UK",
    // },
    // {
    //     id: "888",
    //     icon: "coffee",
    //     location: "Cafe",
    //     destination: "London Eye, London, UK",
    // },
];

const NavFavourites = () => {
    const navigation = useNavigation();
    return (
        <FlatList style={{ marginTop: 15, marginBottom: 10 }}
            data={data}
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={() => (
            //     <View style={{ backgroundColor: 'gray', height: 0.5 }}></View>
            // )}
            renderItem={({ item }) => (
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon
                        style={{ margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 100, }}
                        name={item.icon}
                        type="feather"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={{ fontWeight: "600", fontSize: 15 }}>{item.location}</Text>
                        <Text style={{ color: "gray" }}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites;

const styles = StyleSheet.create({});
