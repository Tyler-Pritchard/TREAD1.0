import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { Buttons, Colors, Spacing } from '../styles'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    
    return (
        <> 
            <View style={styles.container}>
                    <NavigationEvents onWillFocus={fetchTracks} />
                    <FlatList style={styles.buttonsContainer}
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
            </View>
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: Colors.background,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: Spacing.sectionPadding,
        paddingHorizontal: Spacing.small,
        paddingVertical: Spacing.base,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
      },
      buttonText: {
        ...Buttons.text,
      },
});

export default TrackListScreen;