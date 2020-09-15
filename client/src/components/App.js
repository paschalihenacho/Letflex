import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import AboutPage from "./views/AboutPage/AboutPage.js";
import NavBar from "./views/NavBar/NavBar";
import SearchPage from "./views/SearchPage/SearchPage.js";
import GoogleAuth from "./views/GoogleAuth";
import "./App.css";

import Footer from "./views/Footer/Footer";

import BlogPage from "./views/BlogPage/BlogPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/about" component={Auth(AboutPage, false)} />

          <Route exact path="/google" component={Auth(GoogleAuth, true)} />

          <Route exact path="/blogs" component={Auth(BlogPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/search" component={Auth(SearchPage, false)} />

          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetail, null)}
          />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
