import Router,{Component} from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./find.scss"

class Find extends Component{
	render(){
		return (
			<div id="find">
				<ul className="findul">	
					<li><NavLink to="/news" activeClassName='active'>新闻</NavLink></li>
					<li><NavLink to="/trailer" activeClassName='active'>预告片</NavLink></li>
					<li><NavLink to="/toplist" activeClassName='active'>排行榜</NavLink></li>
					<li><NavLink to="/review" activeClassName='active'>影评</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}
export default Find