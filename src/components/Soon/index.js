import React,{Component} from 'react';
import axios from 'axios';

class Soon extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:''
		}
	}
	render(){
		return <div>
			<div>
				<h2>
					<a href="/film/coming">
						<i className="iconfont icon-more"></i>
						<b>{this.state.text}</b>
					</a>
				</h2>
			</div>
		</div>
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=886&t=201810318355883413').then(res => {
			this.setState({
				text:`即将上映(${res.data.totalComingMovie}部)`
			})
		})
	}
}
export default Soon;