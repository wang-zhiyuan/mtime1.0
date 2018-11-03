import React,{Component} from 'react'


class Navigator extends Component{
	render(){
		return (
			<div className="navigator">
				{
					this.props.navigatorIcon?this.props.navigatorIcon.map((item)=>
					<a href={item.url} key={item.url}>
						<img src={item.image} alt={item.iconTitle}/>
						<span>
						{item.iconTitle}
						</span>
					</a>
						):null
				}
			</div>
		)
	}
	componentDidUpdate(){
	}
}
export default Navigator