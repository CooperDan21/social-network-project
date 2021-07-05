import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/RecommendedFriends/Friends';
import SideBar from './components/Sidebar/SideBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {ReduxStoreType} from './redux/redux-store';

type StatePropsType = {
    store: ReduxStoreType
}

function App(props: StatePropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <SideBar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}
                    />
                    <Route path='/profile' render={() =>
                        <Profile />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    {/*<Friends render={() => {} } />*/}
                    <Route path='/friends' render={() => <Friends store={props.store} />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
