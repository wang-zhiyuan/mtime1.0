import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';
class Advert extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[]
		}
	}
	render(){
		return <div>
			<p className="colorp"></p>
				<div className="Advert">
					<img src={this.state.list} alt=""/>
				</div>
			<p className="colorp"></p>
		</div>
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=20181031127120013').then(res => {
			this.setState({
				list:res.data.areaFirst.image

			})
		})
	}
}
export default Advert;