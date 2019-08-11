export default {
  asyncUpdateUsername(store,username){
    //异步操作
    setTimeout(() =>{
        store.commit("updateUsername",username)
    },1000)
  }
}