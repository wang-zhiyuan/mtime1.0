import React,{Component} from 'react'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'

class Topic extends Component{
	render(){
		return (
			<div className="topic clear">
				<div className="swiper-container topicSwiper">
				    <div className="swiper-wrapper">
				     	{
							this.props.topic?this.props.topic.map((item,index)=>
								<div className="swiper-slide" key={item.url}>
									<div className="slidePreview">
										<img src={item.checkedImage} alt="" onClick={this.handleClick.bind(this,index)}/>
									</div>
									
								</div>
							):null
						}						  
				    </div>
					
				   
				    
				    
				 
				   
				</div>
				<div className="topicBox clear">
				    {
						this.props.topic?this.props.topic.map((item,index)=>							
							<div className="childbox" key={item.uncheckImage} style={this.state.currentIndex===index?{display:'block'}:{display:'none'}}>
								<div className="banner">
									<img src={item.backgroupImage} alt=""/>
								</div>
								<div className="content">
									<h3>{item.titleEn}</h3>
									<h2>{item.titleCn}</h2>
									<div className="products">
									{
										item.subList.map((info,index)=>
											<div className="product" key={info.image} onClick={this.handlecheck.bind(this,info.goodsId)}>
											<img src={info.image} alt=""/>
											<h3>{info.title}</h3>
											<p>￥
											<strong>
												
											{
												this.props.goodsPrices.length!==0?this.props.goodsPrices.result.find((priceItem,index,arr)=>{
													if(priceItem.id===info.goodsId){
														return true
													}else{

														return false
													}
												}).price/100:'0'
											}
											</strong>
											</p>
											</div>
										)
									}
									</div>
								</div>
								<div className="actMore">
									<a href={'http://m.mtime.cn/#!/commerce/list/?q='+item.titleCn}>更多商品 ></a>
								</div>
							</div>
						):null
					} 
				</div>
				
			</div>
		)
	}
	componentDidUpdate(){
		new Swiper ('.topicSwiper',{
			slidesPerView : 4,
			 width:  window.screen.width,
		})  
	}
	
	constructor(props){
		super(props)
		this.state = {
			currentIndex:0
		}
	}
	handleClick(index){
		this.setState({
			currentIndex:index
		})
	}
	handlecheck(id){
		this.props.history.push('/commerce')
	}
}
export default Topic