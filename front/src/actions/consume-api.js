import axios from "axios";
const apiRoute = "http://localhost:7000";

//GET ALL
export function consumeApiGet() {
  return dispatch => {
    return axios
      .get(`${apiRoute}`)
      .then(res => {
        dispatch({
          type: "CONSUME_API_GET",
          payload: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
//GET ONE
export function consumeApiGetById(id) {
  return dispatch => {
    return axios
      .get(`${apiRoute}/user`, { params: { id } })
      .then(res => {
        dispatch({
          type: "CONSUME_API_GET_ONE",
          payload: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
//POST
export function consumeApi(first, last) {
  return dispatch => {
    return axios
      .post(`${apiRoute}`, { firstName: first, lastName: last })
      .then(() => {
        dispatch(consumeApiGet());
      })
      .catch(error => {
        throw error;
      });
  };
}
//DELETE
export function consumeApiDelete(id) {
  console.log(id);
  return dispatch => {
    return axios
      .delete(`${apiRoute}`, { data: { id: id } })
      .then(() => {
        dispatch(consumeApiGet());
      })
      .catch(error => {
        throw error;
      });
  };
}
//UPDATE
export function consumeApiPut(id, first, last) {
  console.log("data:", id, first, last);
  return dispatch => {
    return axios
      .put(`${apiRoute}/`, { id: id, firstName: first, lastName: last })
      .then(() => {
        dispatch(consumeApiGet());
      })
      .catch(error => {
        throw error;
      });
  };
}
