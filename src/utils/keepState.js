import store from '../store/store.js';

export function keepStateAll() {
    //刷新页面，保留所有的state
    if (sessionStorage.hasOwnProperty("store")) {
        store.replaceState(
            Object.assign(
                {},
                store.state,
                JSON.parse(sessionStorage.getItem("store"))
            )
        );
        sessionStorage.removeItem("store");
    }
    window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(store.state));
    });
}
export function keepStatePart(args){
    /*
    **刷新页面保留部分state
    **args [] state的名称
    */
   let keepStatePartObj = {};
   let stateNameList = [];
    args.forEach((state)=>{
        if(sessionStorage.hasOwnProperty(state)){
            let stateName = sessionStorage.getItem(state);
            
            if(typeof stateName === 'object'){
                keepStatePartObj[state] = JSON.parse(stateName);
            }else{
                keepStatePartObj[state] = stateName;
            }
            stateNameList.push(state);
        }
    })
    console.log(keepStatePartObj);
    console.log(stateNameList);


    store.replaceState(
        Object.assign(
            {},
            store.state,
            keepStatePartObj
        )
    );
    // stateNameList.forEach(state => {
    //     sessionStorage.removeItem(state);
    // });
    window.addEventListener("beforeunload", () => {
        args.forEach((state)=>{
            let stateName = store.state[state];
            if( typeof stateName === 'object'){
                sessionStorage.setItem(state, JSON.stringify(stateName));
            }else{
                sessionStorage.setItem(state,stateName);
            }
        })
    });
}