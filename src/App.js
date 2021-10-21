import React from 'react';

import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductPage from './pages/Products';
import ContactPage from './pages/Contact';
import BookingPage from './pages/Bookings';
import AgendaPage from './pages/Agenda';
import IntakeFormPage from './pages/IntakeForm';

import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
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
                    <AgendaPage/>
                </Route>
                <Route path="/intake-form">
                    <IntakeFormPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
