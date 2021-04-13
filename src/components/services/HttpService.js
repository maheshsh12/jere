import axios from 'axios';

export default class HttpService {
    static Get({url}) {
        return axios.get(url, this.headers);
    }

    static Post({url, payload}) {
        return axios.post(url, payload, this.headers);
    }

    static Put({url, payload}) {
        return axios.put(url, payload, this.headers);
    }

    static Delete({url}) {
        return axios.delete(url, this.headers);
    }
}