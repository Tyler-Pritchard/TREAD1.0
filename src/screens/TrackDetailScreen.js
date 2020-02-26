import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import { searchbarPadding } from '../styles/spacing';
import { sectionBackground } from '../styles/colors';
import { screenHeader } from '../styles/typography';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return 
        <>
        <Text style={styles.textStyle}>{track.name}</Text>
        <MapView
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
            style={styles.map}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
        </>
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    textStyle: {
        ...screenHeader, 
        backgroundColor: sectionBackground,
        paddingBottom: 10,
        paddingTop: 10
    }
});

export default TrackDetailScreen;