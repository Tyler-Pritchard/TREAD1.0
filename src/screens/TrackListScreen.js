import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { LinearGradient } from 'expo-linear-gradient';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <> 
            <View style={styles.container}>
                <LinearGradient
                    colors={["#08AEEA", "#2AF598", "#08AEEA"]}
                    style={{ padding: 15, borderRadius: 5 }}>
                    <NavigationEvents onWillFocus={fetchTracks} />
                    <FlatList style={styles.list}
                        data={state}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => {
                            return ( 
                                <TouchableOpacity 
                                    onPress={() => 
                                        navigation.navigate('TrackDetail', { _id: item._id })
                                    }
                                >
                                    <ListItem 
                                    chevron 
                                    title={item.name}      
                                    />
                                </TouchableOpacity>    
                            );
                        }}
                />
                </LinearGradient>
            </View>
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    list: {
        backgroundColor: "blue"
    }
});

export default TrackListScreen;