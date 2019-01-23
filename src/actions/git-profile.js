import axios from 'axios';

export function gitProfile(username){
    console.log(username);
    return (dispatch)=>{
        return axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
            dispatch({
                type:'GET_GITPROFILE',
                payload:response.data
            })
          })
        .catch(error => {
            throw(error);
            });
    }
}
