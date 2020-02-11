import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    console.log(locations);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView 
            style={styles.map} 
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={locations.map(loc => loc.coords)} /> 
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;