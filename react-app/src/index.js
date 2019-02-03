import React from "react";
import ReactDOM from 'react-dom';

//router
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

//components
import AppContainer from "./container/AppContainer";
import Login from "./components/Login/Login";
import Planet from "./components/Planets/Planets"

  
//auth HOC
import withAuth from "./HOCs/withAuth"

//css files
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/global.css"


//redux config
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';
const store = createStore(rootReducer);
const reactEl = document.getElementById("react-app");

ReactDOM.render(
    <Provider store={store}>
       <Router onUpdate={console.log}>
    <Switch>
        <Route exact path='/login' component={Login}/>
        <AppContainer>
            <Route exact path='/' component={withAuth(Planet)}/>
        </AppContainer>
    </Switch>
</Router>
    </Provider>, reactEl);

// Provider
// console.log("Script Loads !")