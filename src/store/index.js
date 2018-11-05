import {createStore,combineReducers} from 'redux';
var cityTitleReducer = (prevState="大连",action={}) => {
	var type = action.type;
	switch(type){
		case 'changeCityTitle':
			return action.payload
		default:
			return prevState
	}
	return prevState
}
var cityListReducer = (prevState=[],action={}) => {
	var type = action.type;
	switch(type){
		case 'changeCityList':
			return [...prevState,...action.payload]
		default:
			return prevState
	}
	return prevState
}
var reducer = combineReducers({
	cityTitle:cityTitleReducer,
	cityList:cityListReducer
})
const store = createStore(reducer);

export default store;