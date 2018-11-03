import React,{Component} from 'react'
import axios from 'axios'
import './detail.scss'
import Nav from '../../nav'

class Detail extends Component{
	constructor(){
		super()
		this.state={
			datalist:null
		}
	}
	render(){
		return(
			<div id='detail'>
			<Nav {...this.props}></Nav>
			{
				this.state.datalist?
				<div className="all">
					<h2>{this.state.datalist.title}</h2>
					<dl>
						<dt>
							<img src={this.state.datalist.userImage}/>
						</dt>
						<dd>
							<p>{this.state.datalist.nickname}</p>
							<span className="name">{this.state.datalist.relatedObj.name}</span><span className="rating">{this.state.datalist.rating}</span>
						</dd>
						<img className="img" src={this.state.datalist.relatedObj.image}/>
						<p className="time">{this.state.datalist.time}</p>
					</dl>
					<div dangerouslySetInnerHTML={{__html: this.state.datalist.content}} />
				</div>
				:''
			}
			</div>
		)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/Review/Detail.api?reviewId=${this.props.match.params.id}&t=201811212551082811`).then((res)=>{
			this.setState({
				datalist:res.data
			})
			console.log(this.props
)
		})
	}
}
export default Detail