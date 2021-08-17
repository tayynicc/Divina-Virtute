import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

import LandingPage from './components/LandingPage'
import SlideShow from './components/SlideShow'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductDisplay from './components/ProductDisplay'
import Headers from './components/Headers'
import Product from './components/Product'
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from './components/UpdateProductForm';
import UsersProducts from './components/UsersProducts'
import ProductDiscussion from "./components/ProductDiscussion";

import CollectionsLanding from "./components/CollectionsLanding";
import SingleCollection from "./components/SingleCollection";


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
            <Headers />
            <ProductDisplay />
            {/* <Navigation /> */}
          </Route>
          <Route path='/profile/:id'>
            <Profile />
            <UsersProducts />
          </Route>
          <Route path='/products/:id' exact>
              <Product />
              <ProductDiscussion />
      
          </Route>
          <Route path='/new'>
              <AddProductForm />
              
          </Route>
          <Route path='/products/:id/update'>
              <UpdateProductForm />
              {/* <Product /> */}
          </Route>
          <Route path='/collections'>
              <CollectionsLanding />
          </Route>
          <Route path='/collection/:id'>
              <SingleCollection />
          </Route>
        </Switch>
      )}
      </div>
    </>
  );
}

export default App;
