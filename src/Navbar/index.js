import React,{Component} from 'react';
import  {NavLink } from "react-router-dom";
import './index.scss';
import '../iconfont/iconfont.css';
class Navbar extends Component{
	render(){
		return <div>
			<ul className="navbar">
			  <li className="logo navbar_color"><NavLink to="/home" activeClassName="logo"><em></em></NavLink></li>
			  <li className="navbar_color"><NavLink to="/home" activeClassName="navbar_active"><span>首页</span></NavLink></li>
			  <li className="navbar_color"><NavLink to="/ticket" activeClassName="navbar_active"><span>购票</span></NavLink></li>
			  <li className="navbar_color"><NavLink to="/mall" activeClassName="navbar_active"><span>商城</span><span className="new">NEW</span></NavLink></li>
			  <li className="navbar_color"><NavLink to="/find" activeClassName="navbar_active"><span>发现</span></NavLink></li>
			  <li className="navbar_color"><NavLink to="/user" activeClassName="navbar_active"><span><i className="iconfont icon-ICON_wode_x"></i></span></NavLink></li>
			</ul>
		</div>
	}
}

export default Navbar;