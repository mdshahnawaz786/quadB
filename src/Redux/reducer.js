export function basicReducer(storeData={allJobs:[],search:[]}, action){
    if(action.type === "allJobs"){
        console.log(action);
        return{
            ...storeData,
            allJobs:action.payload
        }
    }

    else if(action.type === "search"){
        return{
            ...storeData,
            search:action.payload
        }
    }

    return storeData
}
