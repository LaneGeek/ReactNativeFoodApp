import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name='search' size={30}/>
            <TextInput placeholder='Search'/>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEEEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1
    }
});

export default SearchBar;
