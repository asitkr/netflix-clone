import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/screens/HomeScreen.jsx';
import LoginScreen from './components/screens/LoginScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        //logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
          {
            !user ? (
              <LoginScreen />
            ) : (
              <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/profile' element={<ProfileScreen />} />
              </Routes>
            )
          }
      </BrowserRouter>
    </div>
  );
}

export default App;
