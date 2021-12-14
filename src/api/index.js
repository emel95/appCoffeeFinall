import axios from 'axios';


// *********confige axios and url

const url='https://rnapi.ghorbany.dev/api';

axios.defaults.headers.post["Content-Type"]="application/json";


export default{
    get:axios.get,
    post:axios.post,
    url:url,
};
