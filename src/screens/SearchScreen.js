import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => results.filter(x => x.price === price);

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Inexpensive Restaurants"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Moderately Priced"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Expensive"/>
                <Text style={styles.instructions} >
                    Enter the food type in the search bar above to search for restaurants in
                    Eugene, Oregon. For example you could type 'Burger' or 'Pizza' or 'Italian'.
                </Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    instructions: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    }
});

export default SearchScreen;
