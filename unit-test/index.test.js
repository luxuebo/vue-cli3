import Vue from 'vue'
import testIndex from '@/views/013.unit-test/index.vue'


describe('testIndex', () => {
  // 检查原始组件选项
  test('has a created hook', () => {
    expect(typeof testIndex.created).toBe('function')//检查原始组件的生命周期函数created是否是函数
  })

  // 评估原始组件选项中的函数的结果
  test('sets the correct default data', () => {
    expect(typeof testIndex.data).toBe('function')//检查组件中的data是否是函数
    const defaultData = testIndex.data()
    expect(defaultData.message).toBe('hello!')//检查原始组件data中的message是否是'hellow!'
  })

  // 检查 mount 中的组件实例
  test('correctly sets the message when created', () => {
    const vm = new Vue(testIndex).$mount()
    expect(vm.message).toBe('单元测试(jest)')//检查mounted之后的实例data中的message是否是'单元测试(jest)'
  })

  // 创建一个实例并检查渲染输出
  test('renders the correct message', () => {
    const Constructor = Vue.extend(testIndex)
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName.toLowerCase()).toBe('div')//检查组件根元素是否是div
  })
})