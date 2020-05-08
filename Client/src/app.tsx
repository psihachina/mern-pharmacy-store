import * as $ from 'jquery';                //js
import 'bootstrap';                         //js
import 'bootstrap/dist/css/bootstrap.min';  //css
import 'font-awesome/css/font-awesome.min'; //css

import './assets/scss/style'                //scss

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DeliveryPage, MainPage, MedicamentPage, OrderPage } from './Components/Pages';
import { Menu } from './Components/Menu';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Menu />

                    <Switch>
                        <Route exact path="/" component={MainPage}></Route>

                        <Route path="/Order" component={OrderPage}></Route>

                        <Route path="/Delivery" component={DeliveryPage}></Route>

                        <Route path="/Medicaments/:id" component={MedicamentPage}></Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);