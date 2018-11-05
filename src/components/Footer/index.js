import React,{Component} from 'react';
import  {NavLink } from "react-router-dom";
import './index.scss';
class Footer extends Component{
	render(){
		return <div>
			<ul className="footer">
			  <li className="footer_color"><NavLink to="/home" activeClassName="active"><span>首页</span></NavLink></li>
			  <li className="footer_color"><NavLink to="/ticket" activeClassName="active"><span>购票</span></NavLink></li>
			  <li className="footer_color"><NavLink to="/mall" activeClassName="active"><span>商城</span></NavLink></li>
			  <li className="footer_color"><NavLink to="/find" activeClassName="active"><span>发现</span></NavLink></li>
			  <li className="footer_color"><NavLink to="/user" activeClassName="active"><span>我的</span></NavLink></li>
			</ul>
		</div>
	}
}

export default Footer;