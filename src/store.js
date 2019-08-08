import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		val1: 0,
		val2: 0,
		val3: 0,
		CurrentVal: null,
	},	
	getters: {
		getVal1(state){	return state.val1 },
		getVal2(state){	return state.val2 },
		getVal3(state){	return state.val3 },
		getId(state){ return state.CurrentVal },
	},
	mutations: {
		setVal(state, data){
			let nom = data.nom
			let val = data.val
			if (nom == 1) state.val1 = val
			if (nom == 2) state.val2 = val
			if (nom == 3) state.val3 = val
			//state.val1 = data
		},
		setId(state, data){
			state.CurrentVal = data
		},
		ChangeId(state, data){
			if (data == 1){
				state.CurrentVal++
				if (state.CurrentVal > 3) state.CurrentVal = 1
				return;
			}
			if (data == -1){
				state.CurrentVal--
				if (state.CurrentVal <= 0) state.CurrentVal = 3
				return;
			}
			state.Id = data
		},
	},
	actions: {
	}
})
