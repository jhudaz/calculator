function getInitialState(){
    return {};
}

export default function(state=getInitialState() ,action){

    switch(action.type){
        case "GET_GITPROFILE":
            console.log('entro!')
            return 
        default:
            return state;
    }
}
