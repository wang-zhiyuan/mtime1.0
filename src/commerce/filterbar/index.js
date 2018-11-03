import React,{ Component } from 'react'
import store from '../../store'


class FilterBar extends Component{
	render(){
		return (
		<ul className="filterbar">
			<li onClick={this.handleClick.bind(this,0)} className={this.state.currentIndex===0?'clicked':''}>综合排序
				<ul className={this.state.currentIndex===0?'currentList':''}>
					<li  onClick={this.handleSubmenu.bind(this,1)}>综合排序</li>
					<li  onClick={this.handleSubmenu.bind(this,1)} >价格从低到高</li>
					<li  onClick={this.handleSubmenu.bind(this,1)}>价格从高到低</li>
					<li  onClick={this.handleSubmenu.bind(this,1)}>好评率从高到低</li>
					<li  onClick={this.handleSubmenu.bind(this,1)}>销量从高到低</li>
				</ul>
			</li>
			<li  onClick={this.handleClick.bind(this,1)} className={this.state.currentIndex===1?'clicked':''}>主题角色
				<ul className={this.state.currentIndex===1?'currentList':''}>
				{	
					this.state.searchResult?this.state.searchResult.topics.map((option,index)=>
						<li onClick={this.handleSubmenu.bind(this,1)} key={option.Logo}><img src={option.Logo} alt=""/>{option.ShortTitle}</li>
					):null
				}
				</ul>
			</li>
			<li onClick={this.handleClick.bind(this,2)} className={this.state.currentIndex===2?'clicked':''}>全部分类
				<ul className={this.state.currentIndex===2?'currentList':''}>
				{	
					this.state.searchResult?this.state.searchResult.content.category.categoryList.map((option,index)=>
						<li onClick={this.handleSubmenu.bind(this,2)} key={option.categoryId}>{option.name}</li>
					):null
				}
				</ul>
			</li>
		</ul>
			
		)
	}
	constructor(props){
		super(props)
		this.state = {
			searchResult:null,
			currentIndex:null
		}
	}
	componentDidMount(){
		store.subscribe(()=>{
			this.setState({
				searchResult:store.getState().goodsList
			})
			console.log(this.state.searchResult)
		})
	}
	handleClick(index,evt){
		

		if(this.state.currentIndex ===index){
			this.setState({
				currentIndex:null
			})
		}else{
			this.setState({
				currentIndex:index
			})
		}
	}
	handleSubmenu(index,evt){
		evt.stopPropagation()
		
	}
}

export default FilterBar


