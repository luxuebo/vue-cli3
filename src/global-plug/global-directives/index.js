let mydirective = {
	directiveName:'bgcolor',
	configObject:{
		bind (el, binding, vnode, oldVnode) {
      		el.style.backgroundColor = 'purple'
    	}
	}
}
let mydirective1 = {
	directiveName:'color',
	configObject:{
		bind (el, binding, vnode, oldVnode) {
      		el.style.color = 'pink'
    	}
	}
}
export default{
	mydirective,
	mydirective1
}