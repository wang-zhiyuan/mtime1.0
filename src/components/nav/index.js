import React,{Component} from 'react';
import '../../iconfont/iconfont.css';
import './index.scss';

class Nav extends Component{
	render(){
		return <div>
				<div className="left_1" onClick={this.click.bind(this)}>
					<i className="iconfont icon-back"></i>
				</div>
		</div>
	}
	click(){
		this.props.history.goBack()
	}
}
export default Nav