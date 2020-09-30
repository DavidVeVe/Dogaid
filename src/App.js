import React from "react";
import {
  BrowserRouter as Router,
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
// import Users from "./user/pages/Users";

import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
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
      </Switch>
    </Router>
  );
};

export default App;
