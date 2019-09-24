export default {
    getUsername:state => {
      return `姓名:${state.username}`
    },
    getAge:state => {
        return `年龄：${state.age}`
    }
  }
  