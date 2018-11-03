import React,{Component} from 'react'


class Category extends Component{
	render(){
		return (
			<div className="category">
			{
			this.props.category?this.props.category.map((item)=>
				<div className="box" key={item.moreUrl}>
					<h2 className="title">
						<span style={{backgroundColor:item.colorValue}}></span>
						{item.name}
						<a href={item.moreUrl}>更多<span>&gt;</span></a>
					</h2>
					<dl className="boxContent">
						<dt className="banner">
							<a href={item.imageUrl}>
								<img src={item.image} alt={item.name}/>
							</a>
						</dt>
						<dd className="subList">
							<ul>
							{
								item.subList.map((product)=>
									<li key={product.image}>
										<img src={product.image} alt=""/>
										<h3>{product.title}</h3>
										<p>￥
											<span>	
											{
												this.props.goodsPrices.length!==0?this.props.goodsPrices.result.find((priceItem,index,arr)=>{
													if(priceItem.id===product.goodsId){
														return true
													}else{

														return false
													}
												}).price/100:'0'
											}
											</span>
										</p>
									</li>
								)
							}
							</ul>
						</dd>
					</dl>
				</div>
			):null
			}
			</div>
		)
	}
	componentDidUpdate(){
		console.log(this.props)
	}
}
export default Category