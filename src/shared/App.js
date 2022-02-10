import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configStore";
import {useDispatch} from 'react-redux';
import {apiKey} from "../shared/firebase";
import {actionCreators as userActions} from '../redux/modules/user';


import PostList from '../pages/PostList';
import {Button, Grid} from '../elements';
import Header from '../components/Header';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Permit from "../shared/Permit";

function App() {

  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if(is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path='/' exact component={PostList} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+"></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
