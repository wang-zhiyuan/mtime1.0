import React,{ Component } from 'react'
import axios from 'axios'
import store from '../../store'


class CommerceList extends Component{
	render(){
		return (
		<div className='commercelist'>		
		{
			this.state.goodsList?this.state.goodsList.content.goods.goodsList.map((item)=>
				<div key={item.imageSrc} className="commodity">
					<div className="banner">
						<img src={item.imageSrc} alt=""/>
						<span>{item.iconText}</span>
					</div>
					<div className="content">
						<h2>
							<span>{item.goodsTip}</span>
							{item.name}
						</h2>
						<p>
							<i>￥{item.minSalePrice/100}</i>
							<b>￥{item.marketPrice/100}</b>
							
						</p>
					</div>
					
				</div>
			):null
		}
		</div>
			
		)
	}
	constructor(props){
		super(props)
		this.state = {
			goodsList:null,
			
		}
	}
	componentDidMount(){
		store.subscribe(()=>{
			this.setState({
				goodsList:store.getState().goodsList
			})	
		})
	}
	
}

export default CommerceList

