import React,{Component} from 'react';
import  {NavLink } from "react-router-dom";
import './index.scss';
class Footerbar extends Component{
	render(){
		return <div>
			<ul className="footerbar">
			  <li className="footerbar_color"><NavLink to="/home" activeClassName="footerbar_active"><span>PC版</span></NavLink></li>
			  <li className="footerbar_height"><span className="line"></span></li>
			  <li className="footerbar_color"><NavLink to="/ticket" activeClassName="footerbar_active"><span>客户端下载</span></NavLink></li>
			  <li className="footerbar_height"><span className="line"></span></li>
			  <li className="footerbar_color"><NavLink to="/mall" activeClassName="footerbar_active"><span>意见反馈</span></NavLink></li>
			  <li className="footerbar_height"><span className="line"></span></li>
			  <li className="footerbar_color"><NavLink to="/find" activeClassName="footerbar_active"><span>帮助</span></NavLink></li>
			</ul>
		</div>
	}
}
export default Footerbar;