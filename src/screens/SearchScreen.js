import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={newTerm => console.log('ooo')}
            />
            <Text>Search Screen {term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;