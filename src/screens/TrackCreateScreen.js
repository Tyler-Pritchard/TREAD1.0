//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import SearchForm from '../components/Search Form';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { name, recording, changeName }, addLocation } = useContext(LocationContext);
    
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
 
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map /> 
            {err ? <Text>Please enable location services</Text> : null}
            <SearchForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);