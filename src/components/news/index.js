import Router,{Component} from 'react'
import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
import moment from 'moment'
import './news.scss'
import Find from '../../find'
import {NavLink} from 'react-router-dom'
import Totop from '../totop'


class News extends Component{
	constructor(){
		super()
		this.state={
			navList:null,
			dataList:[],
			num:1,
		}
	}


	render(){
		return (
			<div id="news">
			<Find></Find>
			<Totop></Totop>
				<div className="all">
					{
						this.state.navList?
							<div className="navbar">
								<NavLink to={"/news/movie/"+this.state.navList.data.news.newsID}>
									<img src={this.state.navList.data.news.imageUrl}/>
								</NavLink>						
								<div></div>
								<h2>{this.state.navList.data.news.title}</h2>
							</div>
						:""
					}
					{
						this.state.dataList.length!==0?
							<ul>
								{
									this.state.dataList.map((item)=>									
										item.images.length===0?
										<li key={item.id} className="oneimg">
											<NavLink to={"/news/movie/"+item.id} wzy={item.id}>
												<img src={'http://imgproxy.mtime.cn/get.ashx?uri='+item.image+'&width=150&height=150&clipType='}/>
												<h3>{item.title}</h3>
											</NavLink>						

										</li>
										:
										<li className="moreimg" key={item.id}>
											<NavLink to={"/news/movie/"+item.id} wzy={item.id}>
												<h3>{item.title}</h3>											
												<div>
													{item.images.map((item2)=>
														<div key={item2.gId} className="img">														
															<img src={'http://imgproxy.mtime.cn/get.ashx?uri='+item2.url1+'&width=190&height=130&clipType=4'}/>
														</div>
													)}
												</div>
											</NavLink>						
										</li>
									)
								}
							</ul>
						:''
					}
					{
						this.state.num<10?
						<div className="more" onClick={this.getmore.bind(this)}>查看更多</div>
						:''
					}
				</div>
			</div>
		)
	}
	getmore(){
		console.log('aaa')
		axios.get('/Service/callback.mi/News/NewsList.api?t=2018103013502687976&pageIndex='+(this.state.num+1)).then(
			(res)=>{
			this.setState({
				dataList:[...this.state.dataList,...res.data.newsList]
			})
		}).then(()=>{
			this.setState({
				num:this.state.num+1,
			})	
		})
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018103013502536047').then(
			(res)=>{
			this.setState({
				navList:res
			},()=>{
			})
		})
		axios.get('/Service/callback.mi/News/NewsList.api?t=2018103013502687976&pageIndex='+this.state.num).then(
			(res)=>{
			this.setState({
				dataList:[...this.state.dataList,...res.data.newsList]
			},()=>{
				console.log(this.state.dataList)

			})
		})
	}
=======

class News extends Component{
	render(){
		return (
			<div>News</div>
		)
	}
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
}
export default News