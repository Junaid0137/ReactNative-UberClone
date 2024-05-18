import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from "@/slices/navSlice";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const ApiKey = "AIzaSyDQag7e8SOzHbh7XtW4Ofd1Yis1_kQgpWE"
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 20 }}>Good Morning!</Text>
            <View style={{ marginTop: 5 }}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={style}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        enablePoweredByContainer={false}
                        placeholder="Where to?"
                        returnKeyType={'search'}
                        minLength={2}
                        fetchDetails={true}
                        query={{
                            key: ApiKey,
                            language: 'en',
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                            navigation.navigate('RideOptionsCard');
                        }}
                    />
                </View>
                <NavFavourites />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: "auto", backgroundColor: "white", paddingBottom: 10, paddingHorizontal: 70, borderRadius: 20, alignSelf: "center", marginBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={{
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 20,
                    backgroundColor: "black",
                    borderRadius: 100,
                    justifyContent: "space-between",
                    marginTop: 15,
                }} >
                    <Icon name="car" type="font-awesome" color="white" size={20} style={{ paddingHorizontal: 10, alignItems: "center" }} />
                    <Text style={{ color: "white", textAlign: "center" }}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={{
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 100,
                    justifyContent: "space-between",
                    marginTop: 15,
                }} >
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={30} style={{ paddingHorizontal: 10, alignItems: "center" }} />
                    <Text style={{ color: "black", textAlign: "center" }}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const style = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    textInput: {
        fontSize: 18,
        backgroundColor: '#dedde0',
        borderRadius: 10,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
