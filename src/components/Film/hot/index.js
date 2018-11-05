import React,{Component} from 'react';
import axios from 'axios';
import store from '../../../store';
import '../../../iconfont/iconfont.css';
import './index.scss';
class Hot extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[],
			isShow:true,

		}
	}
	render(){
		return <div>
				<ul className="hot">
					{this.state.list.map((item,index) =>
						<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
							<div className="left_float">
								<img src={item.img} alt=""/>	
							</div>
							<div className="left_float right_float">
								<span className="name">{item.t}</span>

								<div className="r_num">
									{item.r != -1 && item.r!==0?<em className="c_score">{item.r}</em>:null}
								</div>
								{
									item.commonSpecial?
									<span className="name_txt">
										<i className="iconfont icon-shangyinhao"></i>
										{item.commonSpecial}
									</span>:
									null
								}
								{
									item.is3D?<span className="name_imax">3D</span>:null
								}
								{
									item.isIMAX?<span className="name_imax">IMAX</span>:null
								}
								{
									item.isDMAX?<span className="name_imax name_imaxbig">中国巨幕</span>:null
								}
								<span className="name_play">{item.cC}家影院上映{item.NearestShowtimeCount}场</span>
								<a href="/mall" className="mall_color">
									<span className="mall_s">购票</span>
								</a>
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

export default Hot;