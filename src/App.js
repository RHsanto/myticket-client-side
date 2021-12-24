import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import UpcomingEvent from './components/Upcoming-Event/UpcomingEvent';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Header from './components/Home/Header/Header';
import Cart from './components/Cart/Cart'
import SignIn from './components/Sign-In&Sign-Up/SignIn';
import MainEvents from './components/AllEvents/MainEvents/MainEvents'
import Parties from './components/AllEvents/Parties/Parties'
import Sports from './components/AllEvents/Sports/Sports'
import Communities from './components/AllEvents/Communities/Communities'
import Concerts from './components/AllEvents/Concerts/Concerts'
import Theaters from './components/AllEvents/Theaters/Theaters'
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Ticket from './components/Ticket/Ticket';


function App() {
  return ( 
    <div className="App">
   <AuthProvider>
   <Router>
        <Header/>
      <Switch>
       <Route exact path='/'>
        <Home/>
       </Route>
     
       <Route path='/home'>
        <Home/>
       </Route>
       <Route  path='/ticket/:ticketId'>
        <Ticket/>
       </Route>
       <Route path='/upcomingEvent'>
       <UpcomingEvent/>
       </Route>
       <Route path='/events'>
       <Events/>
       </Route>
       <Route path='/gallery'>
         <Gallery/>
       </Route>
       <Route path='/contact'>
         <Contact/>
       </Route>
       <PrivateRoute path='/cart'>
           <Cart/>
       </PrivateRoute>
       <Route path='/signIn'>
         <SignIn/>
       </Route>
       <PrivateRoute path='/main-events'>
         <MainEvents/>
       </PrivateRoute>
       <PrivateRoute path='/parties'>
         <Parties/>
       </PrivateRoute>
       <PrivateRoute path='/sports'>
         <Sports/>
       </PrivateRoute>
       <PrivateRoute path ='/communities'>
         <Communities/>
       </PrivateRoute>
       <PrivateRoute path ='/concert'>
         <Concerts/>
       </PrivateRoute>
       <PrivateRoute path='/theaters'>
         <Theaters/>
       </PrivateRoute>
       
       <Route path = '*'>
         <NotFound/>
       </Route>
      </Switch>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
