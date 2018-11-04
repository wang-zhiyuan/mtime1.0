import React,{Component} from 'react';
import axios from 'axios';
import store from '../../store';
class City extends Component{
	constructor(props){
		super(props);
		this.state = {
			cityList:[]
		}
	}
	render(){
		return <div>
			<ul>
				{
					this.state.cityList.map(item => 
					<li key={item.id} onClick={this.handleClick.bind(this,item)}>
						<h4>{item.n}</h4>
					</li>
					)
				}
			</ul>
		</div>
	}
	handleClick(item){
		console.log(this.props);
		store.dispatch({
			type:'changeCityTitle',
			payload:item.n
		})
		this.props.history.push("/home/"+item.id);

	}
	componentDidMount(){
		axios.get('/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1541037631129').then(res => {
			this.setState({
				cityList:res.data.p
			})
			console.log(res.data)
			
		})
	}
}
export default City;