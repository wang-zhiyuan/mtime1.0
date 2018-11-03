import React,{Component} from "react"
import axios from 'axios'
import './movie.scss'
import Nav from '../../nav'

class ToplistMovie extends Component{
	constructor(){
		super()
		this.state={
			datalist:null,
			toplistID:null
		}
	}
	render(){
		return (
			<div id="datalistmovie">
				{
					this.state.toplistID===this.props.match.params.toplistID?
					<div className="all">
					<Nav {...this.props}></Nav>
						<div className="navbar">
							<h2>{this.state.datalist.topList.name}</h2>
							<p>{this.state.datalist.topList.summary}</p>
						</div>
						<ul>
							{
								this.state.datalist.movies.map((item)=>
									<li key={item.id}>
										<dl>
											<dt>
												{	
													item.rankNum<10?
													<span className={'name'+item.rankNum}>{'0'+ item.rankNum}</span>
													:
													<span>{item.rankNum}</span>
	
												}
												<img src={item.posterUrl}/>
											</dt>
											<dd>
												<h4>{item.name + '('+ item.decade + ')'}<span>{item.rating
}</span></h4>
												<span className="nameEn">{item.nameEn}</span>
												<p>导演:{item.director}</p>
												<p>主演:{item.actor + ' ' + item.actor2}</p>
												<p>{item.releaseDate + ' ' + 
												 item.releaseLocation}</p>
											</dd>
										</dl>
										<div>										
											<p>
												{item.remark.slice(0,39)+'. .'}
											</p>
										</div>
										
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
						console.log('aaa',this.props.match.params.toplistID)
		axios.get(`/Service/callback.mi/TopList/TopListDetails.api?t=20181129274136563&pageIndex=1&type=${this.props.match.params.type}&toplistId=${this.props.match.params.toplistID}&pageSubAreaID=${this.props.match.params.toplistID}`).then(
				(res)=>{
					this.setState({
						datalist:res.data,
						toplistID:this.props.match.params.toplistID
					},()=>{		
						console.log(res)				
						console.log(this.props.match.params.type)
						console.log(this.props.match.params.toplistID)
					})
				}
			)
	}
}
export default ToplistMovie