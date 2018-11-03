import Router,{Component} from 'react'
import React from 'react'
import axios from 'axios'
import './toplist.scss'
import '../../iconfont/iconfont.css'
import Find from '../../find'
import {NavLink} from 'react-router-dom'
import Totop from '../totop'

class Toplist extends Component{
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
			<div id="toplist">
				<Find></Find>
			<Totop></Totop>
				{
					this.state.navList?
						<div className="navbar">	
							<NavLink to={"toplist/movie/2/"+this.state.navList.data.topList.id+'/'}>									
								<img src={this.state.navList.data.topList.imageUrl}/>
								<div></div>
								<h2>{this.state.navList.data.topList.title}</h2>
							</NavLink>					
						</div>
					:""
				}
				<div className="toplistNavbar">
					<ul>
						<li>
							<img src="/images/find/toplist/top01.png"/>
							<p>时光Top100</p>								
						</li>
						<li>
							<img src="/images/find/toplist/top02.png"/>
							<p>华语Top100</p>
						</li>
						<li>
							<img src="/images/find/toplist/top03.png"/>
							<p>全球票房总榜</p>								
						</li>
					</ul>
				</div>
				{
					this.state.dataList?
						<div className="detail">
							<ul>
								{
									this.state.dataList.map((item)=>
										<li key={item.id}>
											<NavLink to={"toplist/movie/2/"+item.id+'/'}>
												<img src={item.coverImg} />
												<div className="text">												
													<h4>{item.topListNameCn}</h4>
													<p>{item.summary}</p>
													<span><i className="iconfont icon-more"></i></span>
												</div>
											</NavLink>
										</li>
									)
								}
							</ul>
						</div>:''
				}
				{
					this.state.num<10?
					<div className="more" onClick={this.getmore.bind(this)}>查看更多</div>
					:''
				}
			</div>
		)
	}
	getmore(){
		axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=201810319454880172&pageIndex='+this.state.num).then(
			(res)=>{
			this.setState({
				dataList:[...this.state.dataList,...res.data.topLists],
				num:this.state.num+1
			},()=>{				
			})
		})
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201810302046357383').then(
			(res)=>{
			this.setState({
				navList:res
			},()=>{
			})
		})
		axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=201810319454880172&pageIndex='+this.state.num).then(
			(res)=>{
			this.setState({
				dataList:res.data.topLists,
				num:this.state.num+1
			},()=>{				
				console.log(res.data.topLists)
			})
		})
	}
}
export default Toplist