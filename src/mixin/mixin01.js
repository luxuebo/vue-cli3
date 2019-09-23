 export let mixin01 = {
    data: function () {
      return {
        message: 'hello',
        foo: 'abc'
      }
    },
    created:function(){
        console.log('混入created钩子函数被调用')
    }
  }

  export let mixin02 ={
      data:function(){
          return {
              mixin02:'hellow02'
          }
      }
  }