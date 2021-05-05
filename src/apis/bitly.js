import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        common: {
            'Authorization': `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }
    }
});