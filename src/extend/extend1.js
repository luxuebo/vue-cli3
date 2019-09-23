export default {
  data () {
    return {
      loading: '我是继承的data'
    }
  },
  methods: {
    showLoading () {
      console.log(this.loading)
    }
  }
}
