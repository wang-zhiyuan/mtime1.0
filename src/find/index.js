import React,{Component} from 'react'

class Find extends Component{
	render(){
		return (
			<div>Find
				{this.props.children}
			</div>
		)
	}
}
export default Find