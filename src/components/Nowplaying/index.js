import React,{Component} from 'react';
import axios from 'axios';
import store from '../../store';
import './index.scss';
class Nowplaying extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[],
			isShow:true
		}
	}

	render(){
		return <div>
				<ul className="nowplaying">
					{this.state.list.map((item,index) =>
						<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
							<div>
								<img src={item.img} alt=""/>	
							</div>
							<span>{item.t}</span>

							<div className="r_num">
								{item.r != -1?<em className="c_score">{item.r}</em>:null}
							</div>
						</li>
					)}
				</ul>
		</div>
	}
	
	handleClick(id){
		console.log(this)
		this.props.history.push('/movie/'+id)
	}
	componentDidMount(){
		axios.get('/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1541042470973').then(res => {
			var id = res.data.p.find((item)=>{
				var city = store.getState().cityTitle
				if(city===item.n){
					return true
				}else{
					return false
				}
			}).id
			axios.get(`/Service/callback.mi/Showtime/LocationMovies.api?locationId=${id}&t=20181111916214236`).then(res => {
				this.setState({
					list:res.data.ms
				})
				console.log(res.data.ms)
			})
		})
		
	}
}

export default Nowplaying;