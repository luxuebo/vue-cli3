//当全局过滤器和局部过滤器重名时，会采用局部过滤器

let upperCase = {
	info:'字母转换成大写',
	filterName:'upperCase',
	filterHander:function(value){
		if (!value) return '';
		return value.toUpperCase();
	}
}
let addNum = {
	info:'字符尾部添加一个数字5',
	filterName:'addNum',
	filterHander:function(value){
		if (!value) return '';
		return value+5;
	}
}
export default{
	upperCase,
	addNum
}