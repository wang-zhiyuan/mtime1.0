import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import Coming from '../components/coming'
import Hot from '../components/hot'
import Movie from '../components/movie'
import News from '../components/news'
import NewsMovie from '../components/news/movie'
import Review from '../components/review'
import Detail from '../components/review/detail'
import Toplist from '../components/toplist'
import ToplistMovie from '../components/toplist/movie'
import Trailer from '../components/trailer'
import Find from '../find'
import Home from '../home'
import Mall from '../mall'
import Ticket from '../ticket'
import App from '../App.js'

var MyRouter = (
	<Router>
		<App>
			<Switch>
				<Route path='/home' render={()=>
				<Home>
					<Switch>				
						<Route path='/home/coming' component={Coming}></Route>
						<Route path='/home/hot' component={Hot}></Route>
					</Switch>
				</Home>}>
				</Route>
				<Route path='/mall' component={Mall}></Route>				
				<Route path='/news/movie/:wzy' component={NewsMovie}></Route>
				<Route path='/news' component={News}></Route>
				<Route path='/trailer' component={Trailer}></Route>
				<Route path='/toplist/movie/:type/:toplistID' component={ToplistMovie}></Route>
				<Route path='/toplist' component={Toplist}></Route>
				<Route path='/review/detail/:id' component={Detail}></Route>									
				<Route path='/review' component={Review}></Route>									
				<Route path='/ticket' component={Ticket}></Route>				
				<Route path='/test' component={ToplistMovie}></Route>				
			</Switch>
		</App>
	</Router>
)

export default MyRouter







