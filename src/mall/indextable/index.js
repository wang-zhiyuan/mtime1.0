import React,{Component} from 'react'

class IndexTable extends Component{
	render(){
		return (
			<div className="indexTable">
				<div className="cellA">
				{
					this.props.cellA?
						<a href={this.props.cellA.url}>
							<img src={this.props.cellA.image} alt=""/>
						</a>
						:null
				}
				</div>
				<div className="cellC">
				{
					this.props.cellC?this.props.cellC.list.map((item)=>
						<a href={item.url} key={item.url}>
							<img src={item.image} alt=""/>
						</a>
						):null
				}
				</div>
				<div className="cellB">
				{
					this.props.cellB?<a href={this.props.cellB.url}>
							<img src={this.props.cellB.img} alt=""/>
						</a>
						:null
				}
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		
	}
}
export default IndexTable