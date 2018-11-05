import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
<<<<<<< HEAD
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
=======
import Coming from '../components/Film/coming'
import Hot from '../components/Film/hot'
import Film from '../components/Film'
import Movie from '../components/movie'
import News from '../components/news'
import Review from '../components/review'
import Toplist from '../components/toplist'
import Trailer from '../components/trailer'
import Nowplaying from '../components/Nowplaying'
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
import Find from '../find'
import Home from '../home'
import Mall from '../mall'
import Ticket from '../ticket'
<<<<<<< HEAD
=======
import User from '../components/user'
import City from '../components/city'
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
import App from '../App.js'

var MyRouter = (
	<Router>
		<App>
			<Switch>
<<<<<<< HEAD
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
=======
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
>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
			</Switch>
		</App>
	</Router>
)

export default MyRouter







