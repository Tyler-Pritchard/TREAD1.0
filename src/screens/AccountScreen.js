import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import { Typography, Colors, Spacing } from '../styles'
import { headerFontSize, headerText, screenHeader, sectionHeader } from '../styles/typography';



const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}> 
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Text style={styles.header}>Account Options</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout} />
                </Spacer>
            </SafeAreaView>
        </View>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};

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
    header: {
        ...sectionHeader
    }
});

export default AccountScreen;