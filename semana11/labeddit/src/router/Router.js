import React from 'react'
import FeedPage from '../pages/feedpages/feedPage'
import LoginPage from '../pages/loginpage/loginPage'
import RegisterFormPage from '../pages/registerFormPage/registerFormPage'
import PostPage from '../pages/postPage/postPage'
import ErrorPage from '../pages/errorPage'
import {Route, Switch } from "react-router-dom"

function Router() {
  return (
    // <BrowserRouter>
    <Switch>
      
      <Route exact path="/">
        <FeedPage/>
      </Route>

      <Route exact path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/register">
        <RegisterFormPage/>
      </Route>

      <Route exact path="/post/:id">
        <PostPage/>
      </Route>

      <Route path="/error">
        <ErrorPage/>
      </Route>

    </Switch >
  // </BrowserRouter>
  

  );
}

export default Router;