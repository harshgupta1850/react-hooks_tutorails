const initialState = {
    age:210,
    history:[],
    loading:false
}

const reducer = (state=initialState,action) =>{
    //const newState = {...state};
    switch(action.type){
        case 'AGE_UP_ASYNC' :
            return {
                ...state,
                age:state.age+1,
                loading:false,
                history:state.history.concat({id:Math.random(),age:state.age+1})
            }
        case 'AGE_DOWN' :
            return {
                ...state,
                age:state.age-1,
                history:state.history.concat({id:Math.random(),age:state.age-1})
            }
        case 'DELETE' :
            return {
                ...state,
                history: state.history.filter( id => id.id!==action.value)
            }
        case 'LOADING' :
            return{
                ...state,
                loading:true
            }
        default : return state
    }
    // if(action.type==='AGE_DOWN'){
    //     newState.age--;
    // }
    // if(action.type==='AGE_UP'){
    //     newState.age++;
    // }
    // return newState;
    

}

export default reducer;