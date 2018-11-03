import React,{Component} from 'react'
import axios from 'axios'


import '../../iconfont/iconfont.css'

class Search extends Component{
	render(){
		return (
			<div className={this.props.location.pathname==='/mall/search/'?'search':'indexsearch'}>
				{
					this.props.location.pathname==='/mall/search/'?
				<div className="clear">
					<i onClick={this.handleGoback.bind(this)}>&lt;</i>
					<a>
						<i className="iconfont icon-ICON_shousuo_x"></i>
						<input type="text" placeholder="搜索正版电影周边" ref="content"/>
					</a>
					<i className="btn" onClick={this.handleSearch.bind(this)}>搜索</i>
				</div>
				:
				<div className="clear">
					<a href="/mall/search/">
						<i className="iconfont icon-ICON_shousuo_x"></i>
						<span>搜索正版电影周边</span>
					</a>
					<i className="iconfont icon-ICON_gouwuche_x" onClick={this.handleClick.bind(this)}></i>
				</div>
				}
				
			</div>
		)
	}
	constructor(props){
		super(props)
		this.state = {
		}
	}
	handleClick(){
		this.props.history.push('/commerce/cart/')
	}
	handleGoback(){
		this.props.history.goBack()
	}
	handleSearch(){
		if(this.refs.content.value){
			this.props.history.push('/commerce/list/?q='+this.refs.content.value)		
		}else{
			return
		}
	}
	componentWillUnmount(){
	}
}
export default Search