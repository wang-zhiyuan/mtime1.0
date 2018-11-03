import React,{ Component } from 'react'
import store from '../../store'
import axios from 'axios'

class SearchBar extends Component{
	render(){
		return (
		<div className='search'>		
			<div className="clear">
				<i onClick={this.handleGoback.bind(this)}>&lt;</i>
				<a>
					<i className="iconfont icon-ICON_shousuo_x"></i>
					<input type="text" placeholder="搜索正版电影周边" ref="content" defaultValue={window.decodeURIComponent(this.props.location.search.slice(3))}/>
				</a>
				<i className="btn" onClick={this.handleSearch.bind(this)}>搜索</i>
			</div>
		</div>
			
		)
	}
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	componentDidMount(){
		console.log(this.props.location.search.slice(3))
		axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=${this.refs.content.value}&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=0&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=64D95BC5B6E89968FAEC4B562872898B&t=201811214422270882`).then((res)=>{
			store.dispatch({
				type:'changeCommerceList',
				payload:res.data
			})
			
		})
	}
	handleSearch(){
		if(store.getState().goodsList.pageTitle){
			if(store.getState().goodsList.pageTitle===this.refs.content.value){
				return
			}
		}
		this.props.history.push('/commerce/list/?q='+this.refs.content.value)
		axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=${this.refs.content.value}&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=0&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=64D95BC5B6E89968FAEC4B562872898B&t=201811214422270882`).then((res)=>{
			store.dispatch({
				type:'changeCommerceList',
				payload:res.data
			})
			
		})

	}
	handleGoback(){
		window.history.go(-1)
	}
}

export default SearchBar


