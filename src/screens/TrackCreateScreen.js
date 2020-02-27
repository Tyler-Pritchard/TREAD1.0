//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import SearchForm from '../components/SearchForm';


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
 
    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
            <SafeAreaView style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.map}>
                        <Map forceInset={{ top: 'always' }}  /> 
                        {err ? <Text>Please enable location services</Text> : null}
                    </View>   
                    <View style={styles.searchBar}>
                        <SearchForm />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 50,
        borderColor: "black",
        borderWidth: 2
    },
    inner: {
        justifyContent: "flex-end",
        // borderColor: "red",
        // borderWidth: 2,
    },
    map: {
        // borderColor: "blue",
        // borderWidth: 3,
        marginBottom: 10,
        marginTop: 0
    },
    searchBar: {
        borderColor: "black",
        borderWidth: 3,
        marginTop: 10,
        marginBottom: 0
    }
});

export default withNavigationFocus(TrackCreateScreen);