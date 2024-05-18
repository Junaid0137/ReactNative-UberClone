import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '@/slices/navSlice';
import NavFavourites from '../components/NavFavourites';
function Hscreen() {
    const dispatch = useDispatch();
    const ApiKey = "AIzaSyDQag7e8SOzHbh7XtW4Ofd1Yis1_kQgpWE"
    return (
        <SafeAreaView>
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{
                    uri: 'https://links.papareact.com/gzs',
                }} />
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    query={{
                        key: ApiKey,
                        language: 'en',
                    }}
                    placeholder="Where From?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        dispatch(setDestination(null));
                    }}
                />
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default Hscreen


const styles = StyleSheet.create({

});
