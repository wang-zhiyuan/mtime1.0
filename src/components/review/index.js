import Router,{Component} from 'react'
import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
import './review.scss'
import Find from '../../find'
import {NavLink} from 'react-router-dom'
import Totop from '../totop'

class Review extends Component{
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
			<div id="review">
				<Find></Find>
			<Totop></Totop>
				{
					this.state.navList?
						<div className="navbar">
							<NavLink to={`/review/detail/${this.state.navList.data.review.reviewID}`}>								
								<img src={this.state.navList.data.review.posterUrl}/>
								<div></div>
								<h2>{this.state.navList.data.review.movieName}</h2>
								<p>{this.state.navList.data.review.title}</p>
							</NavLink>						
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
											<NavLink to={`/review/detail/${item.id}`}>
													<div className="text">												
														<h4>{item.title}</h4>
														<div className="review">
															<div className="head">														
																<img src={item.userImage}/>
															</div>
															<p><span>{item.nickname+'-评分'}</span>{'《'+item.relatedObj.title+'》'}
															<span>{item.rating}</span>
															</p>
														</div>
													</div>
											</NavLink>
										</li>
									)
								}
							</ul>
						</div>
					:''
				}
			</div>
		)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201810302046357383').then(
			(res)=>{
			this.setState({
				navList:res
			},()=>{

				console.log(this.state.navList.data.review.reviewID)
			})
		})
		axios.get('/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=201810311392236160').then(
			(res)=>{
			this.setState({
				dataList:res.data
			},()=>{				
				console.log(this.props)
			})
		})
	}
=======

class Review extends Component{
	render(){
		return (
			<div>Review</div>
		)
	}
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
}
export default Review