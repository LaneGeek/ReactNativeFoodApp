import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'eugene'
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something is wrong!');
        }
    };

    useEffect(() => {
        searchApi('Pakistani');
    }, []);

    return [searchApi, results, errorMessage];
};
