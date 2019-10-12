import store from '../store/store.js';
export function keepState(){
    /* 
    *tips:不能使用localStroge,否则关闭页面后,localStroge中的state不会删除,导致下次打开页面的时候还是上次的state
    */
    if(!arguments.length){
        //不传参数,调用
        keepStateAll()
    }else{
        //传参数调用
        keepStatePart(arguments[0]);
    }
} 
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
export function keepStatePart(args) {
    /*
    **刷新页面保留部分state
    **args [] state的名称
    */
    let keepStateList = [];
    let sessionState = {};
    //筛选需要保存的state是否存在
    args.forEach((stateKey) => {
        if (!store.state.hasOwnProperty(stateKey)) {
            console.warn('store中没有:' + stateKey + ',请确认')
        } else {
            keepStateList.push(stateKey)
        }

    })
    //从sessionStroge中读取保存的state
    keepStateList.forEach((stateKey) => {
        if (sessionStorage.hasOwnProperty(stateKey)) {
            sessionState[stateKey] = JSON.parse(sessionStorage.getItem(stateKey))
        }
    })
    //合并store中的state
    store.replaceState(
        Object.assign(
            {},
            store.state,
            sessionState
        )
    );
    //合并store的state后,删除sessionStroge中的state
    keepStateList.forEach((stateKey)=>{
        sessionStorage.removeItem(stateKey);
    })
    //监听页面加载前,将store中的state存到sessionStroge中
    window.addEventListener("beforeunload", () => {
        keepStateList.forEach((stateKey) => {
            sessionStorage.setItem(stateKey, JSON.stringify(store.state[stateKey]));
        })
    });
}