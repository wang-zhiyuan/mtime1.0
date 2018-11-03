import React,{Component} from 'react'
import SearchBar from './searchbar'
import FilterBar from './filterbar'
import store from '../store'
import axios from 'axios'
import './commerce.scss'





class Commerce extends Component{
	render(){
		return (
			<div id="commerce">
				<SearchBar {...this.props}></SearchBar>
				<FilterBar {...this.props}></FilterBar>
				{
					this.props.children
				}
				
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
}
export default Commerce