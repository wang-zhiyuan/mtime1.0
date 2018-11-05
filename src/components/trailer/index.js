import Router,{Component} from 'react'
import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
import './trailer.scss'
import Find from '../../find'
import Totop from '../totop'

class Trailer extends Component{
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
			<div id="trailer">
			<Totop></Totop>
			<Find></Find>
				{
					this.state.navList?
						<div className="navbar">						
							<img src={this.state.navList.data.trailer.hightUrl}/>
							<div></div>
							<h2>{this.state.navList.data.trailer.title}</h2>
						</div>
					:""
				}
				{
					this.state.dataList?
						<div className="detail">
							<ul>
								{
									this.state.dataList.map((item)=>
										<li key={item.id}>
											<a href={item.hightUrl} target="_blank">
												<img src={item.coverImg} />
												<div className="text">												
													<h3>{item.movieName}</h3>
													<p>{item.summary}</p>
												</div>
											</a>
										</li>
									)
								}
							</ul>
						</div>:''
				}
			</div>
		)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201810302046357383').then(
			(res)=>{
			this.setState({
				navList:res
			})
		})
		axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2018103020463530216').then(
			(res)=>{
			this.setState({
				dataList:res.data.trailers
			})
		})
	}
=======

class Trailer extends Component{
	render(){
		return (
			<div>Trailer</div>
		)
	}
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
}
export default Trailer