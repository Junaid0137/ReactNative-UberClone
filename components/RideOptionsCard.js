import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "@/slices/navSlice";
const data = [
    {
        id: "Uber-B-123",
        title: "Uber Bike",
        multiplier: 0.75,
        image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png",
    },
    {
        id: "Uber-A-123",
        title: "Uber Auto",
        multiplier: 1.15,
        image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png",
    },
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 2,
        image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/package_UberComfort_new_2022.png",
    },
    // {
    //     id: "Uber-XL-456",
    //     title: "Uber XL",
    //     multiplier: 1.2,
    //     image: "https://links.papareact.com/5w8",
    // },
    // {
    //     id: "Uber-LUX-789",
    //     title: "Uber LUX",
    //     multiplier: 1.75,
    //     image: "https://links.papareact.com/7pf",
    // },
]
const renderItemStyle = (isSelected) => {
    if (isSelected) {
        return {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "lightgray",
        };
    } else {
        return {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
        };
    }
};
const confirmStyle = (isSelected) => {
    if (isSelected) {
        return {
            backgroundColor: "black",
            padding: 10,
            width: 200,
            alignItems: "center",
            borderRadius: 15,
            flex: 1,
        };
    } else {
        return {
            backgroundColor: "gray",
            padding: 10,
            width: 200,
            alignItems: "center",
            borderRadius: 15,
            flex: 1,
        };
    }

}
const RideOptionsCard = () => {
    const [selected, setSelected] = useState(null);
    const travelTimeInfo = useSelector(selectTravelTimeInformation);
    return (
        <SafeAreaView style={{ backgroundColor: "white", flexGrow: 1 }}>
            <View>
                <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 20, fontWeight: "500", }}>Select a Ride - {travelTimeInfo?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelected(item)} style={renderItemStyle(item.id === selected?.id)}>
                        <Image
                            style={{ width: 70, height: 70, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: -6 }}>{item.title}</Text>
                            <Text style={{ color: "gray" }}>{travelTimeInfo?.duration?.text}</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            {new Intl.NumberFormat("en-gb", {
                                style: "currency",
                                currency: "INR",
                            }).format(
                                (travelTimeInfo?.duration?.value * item.multiplier) / 10
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                <TouchableOpacity disabled={!selected} style={confirmStyle(selected)}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
