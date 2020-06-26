

const initialState ={
    smurfs: [],
    fetching: false,
    error: ''
}

export const smurfReducer =( state = initialState, action)=> {
    switch(action.type){
        case FETCHING_DATA:
            return{
                ...state,
                fetching: true,
                error: 'Something went wrong',
            }
        case ADD_SMURF:
            return{
                ...state,
                smurfs: action.payload,
                fetching: false,
                error: '',
            }
        case ERROR:
            return{
                ...state,
                fetching: false,
                error: action.payload,
            }
        case POST_SMURF:
            return{
                ...state,
                smurfs:[
                    ...state.smurfs, action.payload
                ]
            }

        default:
            return state;
    }

}