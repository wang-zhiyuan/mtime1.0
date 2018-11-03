import React,{Component} from 'react'
import './totop.scss'
import'../../iconfont/iconfont.css'

class Totop extends Component{
	render(){
		return(
			<div className="totop" onClick={this.totop.bind(this)}><i className="iconfont icon-less"></i></div>
		)
	}
	totop(){
		var id=setInterval(()=>{
			var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
			if(scrollTop<=0){
				scrollTop=0
				clearInterval(id)
			}else{

				document.body.scrollTop = scrollTop - 100
				document.documentElement.scrollTop = scrollTop - 100

			}
		},100)
	}
	componentDidMount(){
		window.onscroll=()=>{
			var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
			if(scrollTop>=1000){
				document.querySelector('.totop').style.display = "block"
			}else{
				document.querySelector('.totop').style.display = "none"
			}
		}
	}
	componentWillUnmount(){
		window.onscroll='none'
		console.log('aaaaaaa')
	}
} 
export default Totop