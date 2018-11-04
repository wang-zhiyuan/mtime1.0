import React,{Component} from 'react';
import './index.scss';
import '../../iconfont/iconfont.css'
class Scrooltop extends Component{
	render(){
		return <div>
			<div className="iconfont icon-less" onClick={this.handleClick}></div>
  		</div>
  
	}
	handleClick(){
		 var id = setInterval(function(){
				var current = document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
				if(current === 0 ){
					clearInterval(id);
				}
				document.body.scrollTop = current - 300;
				document.documentElement.scrollTop = current - 300;
			  },100)
	}
}
export default Scrooltop;