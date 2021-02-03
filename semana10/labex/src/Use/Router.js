import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../screens/public/home/homePage'
import AdmLogin from '../screens/private/login/AdmLogin'
import Application from '../screens/public/formPage/Aplication'
import ListTripsPage from '../screens/public/trips/ListTripsPage'
import AdmListTrip from '../screens/private/listTrips/AdmListTrip'
import AdmTripDetails from '../screens/private/tripDetails/AdmTripDetails'
import AdmCreateTrip from '../screens/private/createTrips/AdmCreateTrip'
import AdmSingUp from '../screens/private/singUp/AdmSingUp'
import AdmHeader from '../components/AdmHeader'
import Footer from '../components/Footer'
function Router() {
  return (
    <BrowserRouter>
    
    
        <Switch>
            <Route exact path="/home">
               <HomePage />
            </Route>
            <Route exact path="/login">
               <AdmLogin />
            </Route>
            <Route exact path="/inscricao/:id/apply">
               <Application />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/viagens_adm/:id">
               <AdmListTrip />
            </Route>
            <Route exact path="/cadastrar_login">
               <AdmSingUp />
            </Route>
            <Route exact path="/detalhes_da_viagem/:id">
               <AdmTripDetails />
            </Route>
            <Route exact path="/criar_viagens">
               <AdmCreateTrip />
            </Route>
            <Route>
               <HomePage />
            </Route>
        </Switch>
        
    </BrowserRouter>
  );
}
export default Router;