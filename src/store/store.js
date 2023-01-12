import {configureStore} from "@reduxjs/toolkit";


function monreducer(state,action){
    if (typeof state === 'undefined') {
        state = [] // If state is undefined, initialize it with a default value
    }

    // let tab = [1,2,3,4]
    // // tab.pop()
    // tab = [...tab-1]
    // console.log(tab)
    let newstate = [...state]

    switch (action.type){
        case 'ADD':{
            if(!newstate.includes(action.recherche)) {
                if (newstate.length < 6) {
                    console.log(state)
                    newstate.unshift(action.recherche);
                    return newstate;
                } else {
                    newstate.unshift(action.recherche);
                    newstate.pop();
                    return newstate;
                }
            }
        }
    }

    // state.films.push(action.original_title)
    // console.log(action.recherche)
    //

    // var newstate = state.unshift(action.recherche)
    // let newstate = []
    // newstate.push.apply(newstate,state)
    // console.log(newstate)
    // newstate.push(action.recherche)
    // console.log(newstate)
    //console.log(state)

    return state;

}
const store = configureStore({
    reducer: monreducer
})


export default store;