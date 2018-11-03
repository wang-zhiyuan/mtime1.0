import Router,{Component} from 'react'
import React from 'react'

class Home extends Component{
	render(){
		return (
			<div>Home

			{this.props.children}
			</div>
		)
	}
}
export default Home