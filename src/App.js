import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Auth from "./user/pages/Auth";
import Pets from "./pets/pages/Pets";
import UpdatePet from "./pets/pages/UpdatePet";
import NewPet from "./pets/pages/NewPet";
import UserPets from "./pets/pages/UserPets";
import MainNavigation from "./UI/Navigation/MainNavigation";
import Pet from "./pets/pages/Pet";

import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Pets />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/:petId/pet">
          <Pet />
        </Route>
        <Route path="/:userId/pets">
          <UserPets />
        </Route>
        <Route path="/pets/new">
          <NewPet />
        </Route>
        <Route pat="/pets/:petId">
          <UpdatePet />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
