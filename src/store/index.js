import { createStore,combineReducers } from 'redux'


function commerceListReducer(prevState={},state){
	switch(state.type){
		case 'changeCommerceList':
		return state.payload
		default:
		return prevState
	}
}

const reducer = combineReducers({	
	goodsList:commerceListReducer
})


const store  = createStore(reducer)
export default store