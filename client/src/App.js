import { Redirect, Route, Router, Switch } from 'react-router';
import './App.css';
import About from './components/about';
import Rakib from './components/individual-about-pages/rakib.jsx';
import NotFound from './components/common/notFound';
import hasib from './components/individual-about-pages/hasib';
import salman from './components/individual-about-pages/salman';
import amlan from './components/individual-about-pages/amlan';
import talha from './components/individual-about-pages/talha';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/amlan" component={amlan}/>
        <Route path="/talha" component={talha}/>
        <Route path="/rakib" component={Rakib}/>
        <Route path="/hasib" component={hasib}/>
        <Route path="/salman" component={salman}/>
        <Route path="/not-found" component={NotFound}/>
        <Redirect from="/" exact to="/about"/>
        <Redirect to="/not-found" />
      </Switch>
    
    </div>
  );
}

export default App;
