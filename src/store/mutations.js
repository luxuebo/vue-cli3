import router from '../router'

export default {
	updateUsername(state, username) {
		state.username = username
	},
	updateAge(state, age) {
		state.age = age
	},
	// 添加tabs
	add_tabs(state, data) {
		state.tabsList.push(data);
	},
	// 删除tabs
	delete_tabs(state, index) {
		
		if (state.tabsList.length - 1 === 0) {
			state.activeIndex = '0'
			router.replace({
				path: '/elementui'
			})
			state.tabsList.splice(index - 1, 1);
		}else{
			state.tabsList.splice(index - 1, 1);	
			if (state.activeIndex > index) {
				state.activeIndex = state.activeIndex - 1 + '';
			}else if (state.activeIndex === index) {
				if(state.activeIndex===state.tabsList.length+1+''){
					state.activeIndex = state.activeIndex - 1 + '';
				}
				router.replace({
					path: state.tabsList[state.activeIndex - 1].route
				})
			}
		}
	},
	// 设置当前激活的tab
	set_active_index(state, index) {
		state.activeIndex = index + '';
	}
}