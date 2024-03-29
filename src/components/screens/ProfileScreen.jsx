import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../Nav';
import './ProfileScreen.css';

const ProfileScreen = () => {

    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i0.wp.com/stormskillstraining.com/wp-content/uploads/2020/07/400-x-400-px-Avatar-Image-1.png?fit=400%2C400&ssl=1" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans"></div>
                        <h3>Plans</h3>
                        <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileScreen;