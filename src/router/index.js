import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import Coming from '../components/Film/coming'
import Hot from '../components/Film/hot'
import Film from '../components/Film'
import Movie from '../components/movie'
import News from '../components/news'
import Review from '../components/review'
import Toplist from '../components/toplist'
import Trailer from '../components/trailer'
import Nowplaying from '../components/Nowplaying'
import Find from '../find'
import Home from '../home'
import Mall from '../mall'
import Ticket from '../ticket'
import User from '../components/user'
import City from '../components/city'
import App from '../App.js'

var MyRouter = (
	<Router>
		<App>
			<Switch>
				{
				// 	<Route path='/home' render={(props)=>
				// <Home {...props}>
				// 	<Switch>				
				// 		<Route path='/home/coming' component={Coming}></Route>
				// 		<Route path='/home/hot' component={Hot}></Route>
				// 	</Switch>
				// </Home>}></Route>
				}
				<Route path='/home' component={Home}></Route>				
				<Route path='/mall' component={Mall}></Route>				
				<Route path='/find' render={()=>
					<Find>
						<Switch>
							<Route path='/find/news' component={News}></Route>
							<Route path='/find/trailer' component={Trailer}></Route>
							<Route path='/find/toplist' component={Toplist}></Route>
							<Route path='/find/review' component={Review}></Route>
						</Switch>
					</Find>
				}></Route>				
				<Route path="/film" render={()=>
						<Film>
							<Switch>
							<Route path="/film/hot" component={Hot}/>
							<Route path="/film/coming" component={Coming}/>
							<Redirect from="/film" to="/film/hot"/>
							</Switch>
						</Film>
				}/>
				<Route path='/ticket' component={Ticket}></Route>
				<Route path='/nowplaying' component={Nowplaying}></Route>
				<Route path='/user' component={User}></Route>
				<Route path='/city' component={City}></Route>
				<Route path='/movie/:movieId' component={Movie}></Route>
				<Redirect from="*" to="/home"/>				
			</Switch>
		</App>
	</Router>
)

export default MyRouter







