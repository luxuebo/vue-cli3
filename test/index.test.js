import Vue from 'vue'
import test01 from '@/views/013.unit-test/test01.vue'


describe('test01', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof test01.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof test01.data).toBe('function')
    const defaultData = test01.data()
    expect(defaultData.message).toBe('hello!')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(test01).$mount()
    expect(vm.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(test01)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})