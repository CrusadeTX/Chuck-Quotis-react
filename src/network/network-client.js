import axios from 'axios';
import constants from '../constants';
const networkClient = {
    get(url,params, success, failure) {
        return this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        },
        
        );
    },
    request: (options = {}) => {
        const data = Object.assign({
            method: 'get',
            baseURL: constants.baseUrl,
        }, options);

        data.params = Object.assign({}, options.params);
        console.log(data.params)
        if(data.params.limitTo===''){
            data.params=null
            console.log(data.params)
        }

        return new Promise((resolve, reject) => {
            axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
                resolve(response.data);
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
                reject(error);
            });

        })

    },
};

export default networkClient;
