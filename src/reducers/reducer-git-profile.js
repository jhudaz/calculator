function getInitialState(){
    return {};
}

export default function(state=getInitialState() ,action){
    console.log('state:',state);
    console.log('action:',action);
    switch(action.type){
        case 'GET_GITPROFILE':
            return action.payload;
            
        default:
            return state;
    }
}
