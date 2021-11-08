import { Redirect, Route, Router, Switch } from 'react-router';
import './App.css';
import About from './components/about';
import Rakib from './components/individual-about-pages/rakib.jsx';
import NotFound from './components/common/notFound';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/rakib" component={Rakib}/>
        <Route path="/not-found" component={NotFound}/>
        <Redirect from="/" exact to="/about"/>
        <Redirect to="/not-found" />
      </Switch>
    
    </div>
  );
}

export default App;
