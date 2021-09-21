import Button from './components/Button'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PublishRegisterLogin from './components/PublishRegisterLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ecommerce from './components/Ecommerce'


function App() {
  return (
    <Router>
      <Route
        path='/'
        exact
        component= {Homepage}
      />
      
      <Route
        path = '/publish'
        exact
        component = {PublishRegisterLogin}
      />

      <Route
        path = '/ecommerce'
        exact
        render = {Ecommerce}
      />
    

    </Router>
    
    
      
   
  );
}

export default App;
