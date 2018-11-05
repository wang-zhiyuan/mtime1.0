import React,{Component,Router} from 'react';
import './index.scss';
import axios from 'axios';
import store from '../../../store';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'

class Coming extends Component{
	constructor(props){
		super(props);
		this.state = {
			comList:[],
			test:'',
			comLists:[],
			text:'',
		}
	}
	render(){
		return (
			<div id="coming">

				<h2>{this.state.test}</h2>
							<div className="swiper-container coming_ul">
							    <div className="swiper-wrapper">
							      	{
										this.state.comList.map((item,index) =>
										<div className="swiper-slide" key={item.id,index} >
											<div key={item.id,index} className="coming_li">
												<span className="mouth">{item.rMonth}月{item.rDay}日</span>
												<div className="upmovie_pic coming_left">
													<img src={item.image} alt=""/>
												</div>
												<div className="coming_left coming_right">
													<h2 className="coming_title">{item.title}</h2>
													<p className="coming_look">
														<b>{item.wantedCount}</b>
														人想看 - {item.type}
													</p>
													<p className="coming_director">导演 : {item.director}</p>
													<p className="coming_actor">演员 : {item.actor1},{item.actor2}</p>
													{
														item.isTicket?<a href="" className="coming_isTicket coming_radius"><span>超前预售</span></a>:null
													}
													{
														item.isVideo?<a href="" className="coming_isVideo coming_radius"><span>预告片</span></a>:null
													}
												</div>
											</div>
										</div>
										)
									}
							    </div>
							  </div>
				<div className="coming_bg"></div>
				<h2 className="coming_text">{this.state.text}</h2>
				<ul className="coming_moviecomings">
					<li>
						<span className="onmonth">11月</span>
						{
							this.state.comLists.filter((item)=>{
								if(item.rMonth===11){
									return	true
								}else{
									return false
								}
							}).map((item)=>
								<div className="coming_li1" key={item.id}>
									<div className="coming_left coming_image">
										<img src={item.image} alt=""/>
									</div>
									<div className="coming_left coming_right">
										<h2>{item.title}</h2>
										<p className="coming_look">
											<b>{item.wantedCount}</b>
											人想看 - {item.type}
										</p>
										<p className="coming_director">导演 : {item.director}</p>
										<p className="coming_actor">演员 : {item.actor1},{item.actor2}</p>
										{
											item.isTicket?<a href="" className="coming_isTicket coming_radius"><span>超前预售</span></a>:null
										}
										{
											item.isVideo?<a href="" className="coming_isVideo coming_radius"><span>预告片</span></a>:null
										}
										<span className="coming_day">{item.rDay}日</span>
									</div>
								</div>
							)
						}
					</li>
					<li>
						<span className="onmonth">12月</span>
						{
							this.state.comLists.filter((item)=>{
								if(item.rMonth===12){
									return	true
								}else{
									return false
								}
							}).map((item)=>
								<div className="coming_li1" key={item.id}>
									<div className="coming_left coming_image">
										<img src={item.image} alt=""/>
									</div>
									<div className="coming_left coming_right">
										<h2>{item.title}</h2>
										<p className="coming_look">
											<b>{item.wantedCount}</b>
											人想看 - {item.type}
										</p>
										<p className="coming_director">导演 : {item.director}</p>
										<p className="coming_actor">演员 : {item.actor1},{item.actor2}</p>
										{
											item.isTicket?<a href="" className="coming_isTicket coming_radius"><span>超前预售</span></a>:null
										}
										{
											item.isVideo?<a href="" className="coming_isVideo coming_radius"><span>预告片</span></a>:null
										}
										<span className="coming_day">{item.rDay}日</span>
									</div>
								</div>
							)
						}
					</li>
					<li>
					<span className="onmonth">1月</span>
						{
							this.state.comLists.filter((item)=>{
								if(item.rMonth===1){
									return	true
								}else{
									return false
								}
							}).map((item)=>
								<div className="coming_li1" key={item.id}>
									<div className="coming_left coming_image">
										<img src={item.image} alt=""/>
									</div>
									<div className="coming_left coming_right">
										<h2>{item.title}</h2>
										<p className="coming_look">
											<b>{item.wantedCount}</b>
											人想看 - {item.type}
										</p>
										<p className="coming_director">导演 : {item.director}</p>
										<p className="coming_actor">演员 : {item.actor1},{item.actor2}</p>
										{
											item.isTicket?<a href="" className="coming_isTicket coming_radius"><span>超前预售</span></a>:null
										}
										{
											item.isVideo?<a href="" className="coming_isVideo coming_radius"><span>预告片</span></a>:null
										}
										<span className="coming_day">{item.rDay}日</span>
									</div>
								</div>
							)
						}
					</li>
					{
						// this.state.comLists.map(item => 
						// 	<li key={item.id}>
						// 		<div className="coming_image">
						// 			<div>
						// 				11月
						// 				{
						// 					item.rMonth===11?<img src={item.image} alt=""/>:null
						// 				}										
						// 			</div>
						// 			<div>
						// 				12月
						// 				{
						// 					item.rMonth===12?<img src={item.image} alt=""/>:null
						// 				}
						// 			</div>
						// 			<div>
						// 				1月
						// 				{
						// 					item.rMonth===1?<img src={item.image} alt=""/>:null
						// 				}
						// 			</div>			
									
						// 		</div>
						// 	</li>
						// )
					}
				</ul>

			</div>
		)
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
		axios.get(`/Service/callback.mi/Movie/MovieComingNew.api?locationId=${id}&t=2018112116338657`).then(res => {
			this.setState({
				comList:res.data.attention,
				comLists:res.data.moviecomings,
				test:`最受关注(${res.data.attention.length}部)`,
				text:`即将上映(${res.data.moviecomings.length}部)`
			},()=>{
				var swiper = new Swiper('.swiper-container',{
					 parallax : true,
					 loop : true,
				})
			})
			console.log(res.data)
		})
	})
	}
}
export default Coming