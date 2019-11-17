import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, View, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={{...styles.details, fontWeight: 'bold'}}>{result.name}</Text>
            <Text style={styles.details}>{result.location.address1} {result.location.address2}</Text>
            <Text style={styles.details}>{result.location.city}, {result.location.state} {result.location.zip_code}</Text>
            <Text style={styles.details}>Tel: {result.display_phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={x => x}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10
    },
    details: {
        marginLeft: 10
    }
});

export default ResultsShowScreen;
