import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import history from './history';

// Material UI Imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";

// Component Imports
import AppBar from "./components/AppBar";

// Page Imports
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";
import TestPage from "./components/pages/TestPage";
import SettingsPage from "./components/pages/SettingsPage";
import ListUserPage from "./components/pages/ListUserPage";
import AddUserPage from "./components/pages/AddUserPage";
import EditUserPage from "./components/pages/EditUserPage";

// Action Imports
import {setSettings} from "./actions/settings-actions";

// Local Storage Operations
import {getLocalSettings,setLocalSettings} from "./services/settingsOperations";


function App() {
  return (
    <div className="App">
      <CssBaseline/>
          <Router>
            <AppBar/>
              <Switch>
                <Route path={"/"} exact /*strict*/ component={HomePage}/>
                <Route path={"/test"} exact /*strict*/ component={TestPage}/>
                <Route path={"/settings"} exact /*strict*/ component={SettingsPage}/>
                <Route path={"/user"} exact /*strict*/ component={ListUserPage}/>
                <Route path={"/add-user"} exact /*strict*/ component={AddUserPage}/>
                <Route path={"/:id/edit-user"} exact /*strict*/ component={EditUserPage}/>
                <Route exact /*strict*/ component={NoPageFound}/>
              </Switch>
          </Router>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {...state,...props};
};

const mapDispatchToProps = {
  setSettings
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
