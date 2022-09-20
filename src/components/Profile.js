import logo from '../images/minimal.jpg'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import '../styles.css'
const Profile = () => {
    const [user] = useAuthState(auth)
    // console.log(user)
    return (
        <div>
            <div>
                <div className='navbar'>
                    {/* <div className='logo'> */}
                    <img src={logo} className='logo' />
                    {/* </div> */}
                    <div className='links'>
                        <div className='link'>
                            <Link to='/' className='link'>home  </Link>

                        </div>
                        <div className='link'>
                            <Link to='/product' className='link'>product  </Link>

                        </div>
                        <div className='link'>
                            <Link to='/cart' className='link'>cart  </Link>

                        </div>
                        <div>
                            <Link to='/profile' className='link'>profile  </Link>

                        </div>
                    </div>

                </div>
                {user ? <SignOut props={user}/> : <SignIn/>}
            </div>
        </div>
    )
}
export default Profile