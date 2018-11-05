import React,{Component} from 'react';
import '../../iconfont/iconfont.css';
import  {NavLink } from "react-router-dom";
import './index.scss';
import axios from 'axios';
import Header from '../header';
import Seach from '../Seach';
import Footer from '../Footer';
import Footerbar from '../Footerbar';
class Film extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShow:true
		}
	}
	render(){
		return <div>
				{
					this.state.isShow?
				<Header deleteevent={() => {
					this.setState({
						isShow:!this.state.isShow
					})
				}}></Header>:
				null
				}
				<div className="left_1">
					<a href="/home">
						<i className="iconfont icon-back"></i>
					</a>
					<ul className="hot_background">
				 	 	<li className="hot_color"><NavLink to="/film/hot" activeClassName="hot_active"><span>正在热映</span></NavLink></li>
				  	 	<li className="hot_color"><NavLink to="/film/coming" activeClassName="hot_active"><span>即将上映</span></NavLink></li>
					</ul>
				</div>
				<Seach></Seach>
				{this.props.children}
				<Footer></Footer>
				<Footerbar></Footerbar>
		</div>
	}
}
export default Film;