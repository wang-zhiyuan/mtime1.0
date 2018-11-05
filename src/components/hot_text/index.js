import Router,{Component} from 'react'
import React from 'react'
import './index.scss'
import axios from 'axios'
class Hot_text extends Component{
	constructor(props){
		super(props);
		this.state = {
			text:''
		}
	}
	render(){
		return (
			<div>
				<h2>
					<a href="/film">
						<i className="iconfont icon-more"></i>
						<b>{this.state.text}</b>
					</a>
				</h2>
				{this.props.children}
			</div>
		)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=886&t=201810318355883413').then(res => {
			this.setState({
				text:`正在热映(${res.data.ms.length}部)`
			})
		})
	}
}
export default Hot_text;