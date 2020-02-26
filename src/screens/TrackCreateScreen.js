//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import SearchForm from '../components/SearchForm';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import sectionPadding from '../styles/spacing';


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { name, recording, changeName }, addLocation } = useContext(LocationContext);
    
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
 
    return (
        <SafeAreaView style={styles.safeArea}>
            <Map forceInset={{ top: 'always' }} style={styles.map} /> 
            {err ? <Text>Please enable location services</Text> : null}
            <SearchForm style={styles.searchbar}/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={5} />
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    searchbar: {
        height: 300,
        ...sectionPadding

    },
    map: {
        ...sectionPadding
    }
});

export default withNavigationFocus(TrackCreateScreen);