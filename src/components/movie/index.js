import React,{Component,Router} from 'react'
import './index.scss';
import store from '../../store';
import Header from '../header';
import axios from 'axios';
class Movie extends Component{
	constructor(props){
		super(props);
		this.state = {
			movieList:{},
			isShow:true,
			releaseList:[]
		}
	}
	render(){
		return (
			<div id="movie">
				{
					this.state.isShow?
				<Header deleteevent={() => {
					this.setState({
						isShow:!this.state.isShow
					})
				}}></Header>:
				null
				}

				<div className="m_bg_img">
					<p></p>
				</div>
				<div>					
					{this.state.movieList.titleCn}
				</div>
				<div className="movie_img">
					<img src={this.state.movieList.image} alt=""/>
				</div>
				<div>
					<span>{this.state.movieList.runTime}</span>
					<span>{this.state.movieList.type}</span>
					<span>{this.state.releaseList.date}{this.state.releaseList.location}</span>
				</div>
					<span>{this.state.movieList.commonSpecial}</span>
					<a href="/mall"><p>查影讯/购票</p></a>
					<aside>
						<p>{this.state.movieList.content}</p>
					</aside>
				{this.props.children}
			</div>
		)
	}
	componentDidMount(){
		console.log(this.props)
		axios.get('/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1541042470973').then(res => {
			var id = res.data.p.find((item)=>{
				var city = store.getState().cityTitle
				if(city===item.n){
					return true
				}else{
					return false
				}
			}).id
			axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.movieId}&locationId=${id}&t=20181139191460829`).then(res => {
				console.log(res.data)
				this.setState({
					movieList:res.data,
					releaseList:res.data.release
				})
			})
		})
	}
}
export default Movie