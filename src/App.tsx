import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store, {ActionType, StoreType} from './redux/store';
import Friends from './components/Friends/RecommendedFriends/Friends';
import SideBar from './components/Sidebar/SideBar';



type StatePropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}


function App(props: StatePropsType) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <SideBar friends={props.store._state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.store._state.dialogsPage.dialogs}
                        messages={props.store._state.dialogsPage.messages}
                        newMessageText={props.store._state.dialogsPage.newMessageText}
                        dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/profile' render={() =>
                        <Profile
                            posts={props.store._state.profilePage.posts}
                            newPostText={props.store._state.profilePage.newPostText}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    {/*<Friends render={() => {} } />*/}
                    <Route path='/friends' render={() => <Friends friends={props.store._state.sideBar.friends} />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
