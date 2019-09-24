import Axios from 'axios'
let $myGlobalMethod = function () {
    // 逻辑...
    console.log('实例方法')
  }
let $myGlobalMethod1 = function () {
    // 逻辑...
    console.log('实例方法1')
}
let $myGlobalMethod2 = function () {
    // 逻辑...
    console.log('实例方法2')
}

let $myGlobalMethod3 = function () {
	// 逻辑...
	console.log('实例方法3')
}
let $myGlobalattr = '实例属性1'
export default {
	$myGlobalMethod,
	$myGlobalMethod1,
	$myGlobalMethod2,
	$myGlobalMethod3,
    $myGlobalattr,
    axios:Axios
}
