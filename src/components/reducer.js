const InitialeState = {
    LanguagePage:"Fr"
}
const reducer=(state=InitialeState,action)=>{
    //eslint-disable-next-line
    switch(action.type){
        case "Langue":
            // console.log(action.Data)
            return {...state,LanguagePage:action.Data}
    }
    return state
}
export default reducer