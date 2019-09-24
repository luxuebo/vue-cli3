//当全局过滤器和局部过滤器重名时，会采用局部过滤器

export let capitalize = function(value){
	/*
	字符串首字母大写
	 */
	if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}
