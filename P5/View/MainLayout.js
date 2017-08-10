import React, {Component} from 'react'
import { BrowserRouter, Route, Link }  from 'react-router-dom'
import TopMenu from "./MenuView";
import RegisterFormController from '../Controller/RegisterFormController'
import CabinetController from '../Controller/CabinetController'
import LogInController from '../Controller/LogInController'
import AddNotificationController from "../Controller/AddNotificationController";
import SearchController from "../Controller/SearchController";

export default class MainLayout extends Component {
    componentDidMount() {

        //-------basic notification list init-------
        let allNotifications = window.sessionStorage.getItem('AllNotifications');
        if (!allNotifications) {
            allNotifications = [{
                id: 1,
                title: 'Title-1',
                description: 'blah-blah-blau',
                metric: 100,
                address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
                price: 1000000,
                user: 1,
                isRent: false
            }, {
                id: 2,
                title: 'Title-2',
                description: 'ysdf;kb sldgjlk lglrg  lg;gk;fg swghf;wfd',
                metric: 51245,
                address: 'rtynvfgf sosgl 5 lskg',
                price: 100000,
                user: 1,
                isRent: false
            }, {
                id: 3,
                title: 'Title-3',
                description: 'blah-blah-blau',
                metric: 100,
                address: 'fhsdklnsdpgjgpf sosgl 5 lskg',
                price: 1000000,
                user: 2,
                isRent: true
            }, {
                id: 4,
                title: 'Title-4',
                description: 'ubaba-ubaba-ubaba',
                metric: 80,
                address: 'sosgl 5 lskg',
                price: 700000,
                user: 3,
                isRent: true
            }, {
                id: 5,
                title: 'Title-5',
                description: 'blah-blah-blau',
                metric: 7510,
                address: '124 hful sosgl 5 lskg',
                price: 652000,
                user: 3,
                isRent: false
            }, {
                id: 6,
                title: 'Title-6',
                description: 'blah-blah-blau',
                metric: 321,
                address: 'Txr Uyt 10 Ioma',
                price: 3210000,
                user: 3,
                isRent: true
            }];
            window.sessionStorage.setItem('AllNotifications', JSON.stringify(allNotifications));
        }
        //-------basic user list init-------
        let allUsers = window.sessionStorage.getItem('allUsers');
        if (!allUsers) {
            allUsers = [{
                id: 1,
                firstName: 'Ivan',
                lastName: 'Gukov',
                email: 'vania@mail.com',
                password: 'ivan1234'
            }, {
                id: 2,
                firstName: 'Baba',
                lastName: 'Yaha',
                email: 'babina@ggg.ru',
                password: 'myNewPass'
            }, {
                id: 3,
                firstName: 'Tuta',
                lastName: 'Netute',
                email: 'tutNeTut@tam.com',
                password: '123456789'
            }];
            window.sessionStorage.setItem('allUsers', JSON.stringify(allUsers));
        }

    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <div id="menu-wrapper">
                        <div id="menu">
                            <TopMenu/>
                        </div>
                    </div>
                    <div id="header-wrapper">
                        <div id="header">
                            <div id="logo">
                                <h1><Link to="/"><span>i</span>Tech<span>Art</span> Task</Link></h1>
                            </div>
                        </div>
                    </div>
                    <div id="page">
                        <div id="content">
                            <Route exact path="/" component={RegisterFormController}/>
                            <Route exact path="/user" component={CabinetController}/>
                            <Route path="/user/add" component={AddNotificationController}/>
                            <Route path="/login" component={LogInController}/>
                            <Route path="/search" component={SearchController}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}