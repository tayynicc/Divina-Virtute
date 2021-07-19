import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage'
import SlideShow from './components/SlideShow'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductDisplay from './components/ProductDisplay'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <div>
        <Navigation isLoaded={isLoaded} />
      </div> */}
      <div>
          {isLoaded && (
          <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <LandingPage />
            <SlideShow />
          </Route>
          <Route path='/home'>
            <Home />
            <ProductDisplay />
            {/* <Navigation /> */}
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      )}
      </div>
    </>
  );
}

export default App;
