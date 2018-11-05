import React,{Component} from 'react';
import store from '../../store';
import './index.scss';
import '../../iconfont/iconfont.css';
class Seach extends Component{
	constructor(props){
		super(props);
		this.state = {
			title:store.getState().cityTitle
		}
	}
	componentWillMount(){
		store.subscribe(() => {
			this.setState({
				title:store.getState().cityTitle
			})
		})
	}
	render(){
		return <div>
			<div className="city_seach">
				<a href="/city" className="city_back">
					<span className='city_title'>
						{this.state.title}
						<i className="iconfont icon-moreunfold"></i>
					</span>
				</a>
				<input type="text" placeholder="影片/影院/影人,任你搜" className="seach"/>
			</div>
		</div>
	}
}
export default Seach;