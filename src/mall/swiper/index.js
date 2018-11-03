import React,{Component} from 'react'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'



class ScrollSwiper extends Component{
	render(){

		return (
			<div className="swiper-container scrollSwiper">
			    <div className="swiper-wrapper">
			        {
			        	this.props.scrollImg?this.props.scrollImg.map((item)=>
			        		<a className="swiper-slide" href={item.url} key={item.url}>
			        			<img src={item.image} alt={item.advTag}/>
			        		</a>
			        		):null
			        }
			    </div>
			    
			    <div className="swiper-pagination"></div>
			    
			</div>
		)
	}
	constructor(props){
		super(props)
		this.state = {

		}
	}
	componentDidMount(){

	}
	componentDidUpdate(){
		new Swiper ('.scrollSwiper', {
		   loop: true, 
		   pagination: {
		    el: '.swiper-pagination',
		    clickable :true,
		    type: 'bullets'
		   },
		   autoplay:true
		 })  
	}
}
export default ScrollSwiper