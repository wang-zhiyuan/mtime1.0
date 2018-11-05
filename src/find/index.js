import Router,{Component} from 'react'
import React from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import "./find.scss"
=======
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523

class Find extends Component{
	render(){
		return (
<<<<<<< HEAD
			<div id="find">
				<ul className="findul">	
					<li><NavLink to="/news" activeClassName='active'>新闻</NavLink></li>
					<li><NavLink to="/trailer" activeClassName='active'>预告片</NavLink></li>
					<li><NavLink to="/toplist" activeClassName='active'>排行榜</NavLink></li>
					<li><NavLink to="/review" activeClassName='active'>影评</NavLink></li>
				</ul>
=======
			<div>Find
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
				{this.props.children}
			</div>
		)
	}
}
export default Find