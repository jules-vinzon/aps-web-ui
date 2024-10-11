import axios from 'axios';
const timeout = 30000;
const apiUrl = process.env.REACT_API_URL;
const userName = process.env.REACT_APP_USER;
const password = process.env.REACT_APP_PASS;

// console.log('apiUrl',apiUrl);
// console.log('userName',userName);
// console.log('password',password);

const bearer = `${userName}:${password}`;
const credentials = new Buffer.from(bearer).toString('base64');
const authHeader = `Basic ${credentials}`;

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authHeader,
};

export function* get(uri) {
    return yield fetch(`${apiUrl}${uri}`, {
        headers: headers,
        method: 'GET',
    });
}

export function* post(uri, data, trxId) {
    return yield fetch(`${apiUrl}${uri}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Request-ID': `${trxId}`,
            'Authorization': authHeader,
        },
        method: 'POST',
        data,
    });
}


export function* fetch(url, options) {
    const result = yield axios.request({
        url,
        baseURL: apiUrl,
        timeout: timeout,
        headers: headers,
        ...options,
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log('error', error);
        return error
    })
    if (result.status) {
        return result;
    } else {
        if (result.response.status === 401 || result.response.status === 403) {
            yield forbidden();
        } else {
            if (result.response) {
                return result.response;
            }
        }
    }
}

// async function axiosReq(url, data, method) {
//     const headers = {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     };
//     const result = await axios.request({
//         url: `${apiUrl}${url}`,
//         headers: headers,
//         timeout: timeout,
//         data,
//         method
//     }).then((res) => {
//         console.log('test', res);
//         return res;
//     }).catch((error) => {
//         console.log('error', error);
//         return error
//     })
//     return result;
// }
