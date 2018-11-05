<<<<<<< HEAD
import Router,{Component} from 'react'
import React from 'react'

class Home extends Component{
	render(){
		return (
			<div>Home

			{this.props.children}
			</div>
		)
=======
import React,{Component,Router} from 'react'
import Navbar from '../Navbar'
import Header from '../components/header'
import Footer from '../components/Footer'
import Seach from '../components/Seach'
import Footerbar from '../components/Footerbar'
import './index.scss';
import '../iconfont/iconfont.css';
import Hot_text from '../components/hot_text';
import Nowplaying from '../components/Nowplaying';
import Scrooltop from '../components/Scrooltop';
import Soon from '../components/Soon';
import Advert from '../components/Advert';
import Hotspot from '../components/Hotspot';
import City from '../components/city';
import axios from 'axios';
import store from '../store';
import { BackTop } from 'antd';
class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShow:true,
		}
	}
	componentDidMount(){
		console.log(this.props)
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

				<Navbar></Navbar>
				<Seach></Seach>
				<Hot_text></Hot_text>
				<Nowplaying  history ={this.props.history} ></Nowplaying>
				<Soon></Soon>
				<Advert></Advert>
				<Hotspot></Hotspot>
				<Footer></Footer>
				<Footerbar></Footerbar>
				{this.props.children}
			</div>
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
	}
}
export default Home