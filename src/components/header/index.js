import React,{Component} from 'react';
import './index.scss';
class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return <div>
			<ul className="header">
				<li className="l" onClick={() => {
					this.props.deleteevent()
				}}>
					<em>×</em>
				</li>
					<li className="l">
						<h1></h1>
					</li>
					<li className="l">
						<p className="prev">您已收到150元新人红包</p>
						<p className="next">下载时光网App查看(仅限新用户)</p>
					</li>
					<li className="l">
						<a>
							<p className="download">下载App</p>
						</a>
					</li>
			</ul>
		</div>
	}
}
export default Header;