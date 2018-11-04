import React,{Component} from 'react';
import './index.scss';
import axios from 'axios';
import moment from 'moment'; 
class Hotspot extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[]
		}
	}
	render(){
		return <div>
			<h2 className="hottitle">今日热点</h2>
			<ul className="hotspot">
				{
					this.state.list.map(item =>
						<li key={item.id}>
							<div className="imgleft">
								<img src={item.img} alt=""/>
							</div>
							<div className="imgleft imgright">
								<h3>{item.title}</h3>
								<span className="fontsmole">{item.desc}</span>
								<span className="fontsmole">{moment.unix(item.publishTime).format("YYYY-MM-DD HH:mm:ss")}</span>
							</div>
						</li>
					)
				}
			</ul>
		</div>
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20181031127189157').then(res => {
			this.setState({
				list:res.data.hotPoints
			})
		})
	}
}
export default Hotspot;