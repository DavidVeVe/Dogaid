import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./user/pages/Auth";
import Pets from "./pets/pages/Pets";
import UpdatePet from "./pets/pages/UpdatePet";
import NewPet from "./pets/pages/NewPet";
import UserPets from "./pets/pages/UserPets";
import MainNavigation from "./UI/Navigation/MainNavigation";
import Pet from "./pets/pages/Pet";
import { AuthContext } from "./shared/context/auth-context";

// import Users from "./user/pages/Users";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  const loginTest = useCallback(() => {
    setIsLoggedin(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedin(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/:userId/pets">
          <UserPets />
        </Route>
        <Route path="/:petId/pet">
          <Pet />
        </Route>
        <Route path="/pets/new">
          <NewPet />
        </Route>
        <Route path="/pets/:petId">
          <UpdatePet />
        </Route>
        <Route path="/pets" exact>
          <Pets />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/pets" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/:userId/pets">
          <UserPets />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/:petId/pet">
          <Pet key={Math.random()} />
        </Route>
        <Route path="/pets" exact>
          <Pets />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: loginTest,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
