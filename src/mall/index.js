import React,{Component} from 'react'
import ScrollSwiper from './swiper'
import Search from './search'
import Navigator from './navigator'
import IndexTable from './indextable'
import Topic from './topic'
import Category from './category'
import Recommend from './recommend'
import axios from 'axios'

import './mall.scss'

class Mall extends Component{
	
	render(){
		return (
			<div id="mall">
			{	
				this.props.location.pathname==='/mall'?
				<div>
					<Search {...this.props}></Search>
					<div>
						<ScrollSwiper scrollImg = {this.state.mallData.scrollImg}></ScrollSwiper>
						<Navigator navigatorIcon = {this.state.mallData.navigatorIcon}></Navigator>
						<IndexTable cellA = {this.state.mallData.cellA} cellB = {this.state.mallData.cellB} cellC = {this.state.mallData.cellC}></IndexTable>
						<Topic topic={this.state.mallData.topic} goodsPrices={this.state.goodsPrices} {...this.props}></Topic>
						<Category category={this.state.mallData.category} goodsPrices={this.state.goodsPrices}></Category>
						<Recommend goodsList={this.state.recommendProducts} goodsPrices={this.state.goodsPrices} {...this.props}></Recommend>
						
					</div>
				</div>:null
			}
			{
				this.props.children
			}
			</div>
		)
	}
	constructor(props){
		super(props)
		this.state = {
			mallData:{},
			goodsPrices:[],
			recommendProducts:[],
			source:null
		}
	}
	componentDidMount(){
		console.log(this.props)
		var CancelToken = axios.CancelToken
		this.source = CancelToken.source()
		console.log(this)
		axios.get('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2018103014453593022',{cancelToken:this.source.token}).then((res)=>{
			
			console.log(res.data)
			this.setState({
				mallData:res.data
			})
			axios.get('/Service/callback.mi/ECommerce/GoodsPrices.api?t=2018103190160230&goodsIds=107091%2C107094%2C105242%2C107095%2C101829%2C104706%2C107061%2C107063%2C107179%2C107113%2C107145%2C107157%2C102831%2C102833%2C102841%2C102533%2C102732%2C102531%2C105695%2C105730%2C105724%2C105727%2C105728%2C105729%2C106277%2C106476%2C106469%2C106560%2C106475%2C106577%2C105442%2C105853%2C106368%2C105059%2C107107%2C107047%2C106471%2C107180%2C107060%2C101891%2C107353%2C104616',{cancelToken:this.source.token}).then((res)=>{
				this.setState({
				goodsPrices:res.data
				})
				axios.get('/Service/callback.mi/ECommerce/RecommendProducts.api?t=2018103114271554482&goodsIds=106277%2C105442&pageIndex=1',{cancelToken:this.source.token}).then((res)=>{
					this.setState({
						recommendProducts:res.data.goodsList
					})
				})
			})
		}).catch(err=>{
			console.log(err)
		})
	}
	componentWillUnmount(){
		this.source.cancel('干掉你')
	}
}
export default Mall