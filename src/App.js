import './app.module.css';
import Login from './common/login/login';
import styles from './app.module.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Maker from './common/maker/maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
