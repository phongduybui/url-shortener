import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
        'Content-Type': 'application/json',
    }
});