import axios from 'axios';

const GetBaseUrl = () => {
    const [ prefix, host, apiPort ] = process.env.REACT_APP_API_URL.split(':').map( (v) => v.replaceAll('/', '') );
    const { hostname, protocol } = window.location;

    let resultingPath;
    if (host == 'localhost')
        resultingPath = apiPort === undefined ? `${protocol}//${hostname}/` : `${protocol}//${hostname}:${apiPort}/`;
    else
        resultingPath = apiPort === undefined ? `${prefix}//${host}/` : `${prefix}//${host}:${apiPort}/`;

    return resultingPath;
};

export const $host = axios.create();
export const $authHost = axios.create();

$authHost.defaults.baseURL = GetBaseUrl();
$host.defaults.baseURL = GetBaseUrl();

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);
$host.interceptors.request.use(authInterceptor);