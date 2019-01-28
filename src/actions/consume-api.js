import axios from 'axios';
const apiRoute = 'http://localhost:7000';


export function consumeApiGet() {
    return (dispatch) => {
        return axios.get(`${apiRoute}`)
            .then(res => {
                dispatch({
                    type: 'CONSUME_API_GET',
                    payload: res.data
                });
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function consumeApi(first, last) {
    return (dispatch) => {
        return axios.post(`${apiRoute}`, { "firstName": first, "lastName": last })
            .then(() => {
                dispatch(consumeApiGet());
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function consumeApiDelete(id) {
    console.log(id);
    return (dispatch) => {
        return axios.delete(`${apiRoute}`, { data: { id: id } })
            .then(() => {
                dispatch(consumeApiGet());
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function consumeApiUpdate(id) {
    return (dispatch) => {
        return axios.delete(`${apiRoute}`, { "id": id })
            .then(() => {
                dispatch(consumeApiGet());
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function consumeApiPut() {
    return (dispatch) => {
        return axios.put(`${apiRoute}/user`)
            .then(response => {
                dispatch({
                    type: 'CONSUME_API_PUT',
                    payload: response.data
                })
            })
            .catch(error => {
                throw (error);
            });
    }
}