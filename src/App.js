import React, {useContext} from 'react';

import TopMenu from './components/TopMenu/TopMenu';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProductPage from './pages/Products/Products';
import ContactPage from './pages/Contact/Contact';
import BookingPage from './pages/Bookings/Bookings';
import AgendaPage from './pages/Agenda/Agenda';
import IntakeFormPage from './pages/IntakeForm/IntakeForm';
import SignInPage from "./pages/SignIn/SignIn";
import SignUpPage from "./pages/SignUp/SignUp";
import ThanksPage from "./pages/Thanks/Thanks";


import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from 'react-router-dom';

import {AuthContext} from "./context/AuthContext";


function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <Router>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/products">
                    <ProductPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="/bookings">
                    <BookingPage/>
                </Route>
                <Route path="/agenda">
                    {isAuth ? <AgendaPage/> : <Redirect to="/signup"/>}
                </Route>
                <Route path="/intake-form">
                    <IntakeFormPage/>
                </Route>
                <Route exact path="/signin">
                    <SignInPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route exact path="/thanks">
                    <ThanksPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
