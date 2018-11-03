import React,{Component} from 'react'
import axios from 'axios'
import './movie.scss'
import Nav from '../../nav'

class NewMovie extends Component{
	constructor(){
		super()
		this.state={
			datalist:null,
		}
	}
	render(){
		return (
			<div id="NewMovie">
				<Nav {...this.props}></Nav>
				{
					this.state.datalist?
					<div className='all'>						
						<h2>{this.state.datalist.data.title}</h2>
						<p>{this.state.datalist.data.time}{this.state.datalist.data.source}</p>
						<div className="detail" dangerouslySetInnerHTML={{__html: this.state.datalist.data.content}}/>
						
					</div>:''
				}
			</div>
		)
	}
	componentDidMount(){
		var myid = this.props.match.params.wzy
		axios.get('/Service/callback.mi/News/Detail.api?newsId='+this.props.match.params.wzy+'&t=201811112564432314').then(
			(res)=>{
				this.setState({
					datalist:res
				},()=>{console.log(res.data.content)})
			}
		)
	}
}
export default NewMovie