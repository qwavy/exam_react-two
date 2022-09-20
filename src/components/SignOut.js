import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles.css'
import { useState } from 'react';

const SignOut = (user) => {
    const pfp = user.props.photoURL
    const [name, setName] = useState(user.props.displayName)
    const [newName, setNewName] = useState('')

    console.log(user)
    const logout = () => {
        signOut(auth)
    }
    const change_name = () => {
        setName(newName)
    }
    return (
        <div className='profile'>
            <h1 className='info_h'>profile</h1>
            <div className='info_user'>
                <div className='info_pfp'>

                    <img src={pfp} className='info_pfp' />
                </div>
                <div className='info_name'>
                    <p className='info_name_p'>{name}  </p>
                    <input onChange={e => setNewName(e.target.value)} className='info_name_input' type='text' placeholder='name' />
                    <button className='info_name_button' onClick={change_name}><span>change name</span></button>
                </div>
                <div className='info_email'>
                    <p className='info_email_p'>{user.props.email}</p>
                </div>
                <div className='signout'>
                    <button onClick={logout} className='signout_btn'>SignOut</button>
                </div>
            </div>
        </div>
    )
}

export default SignOut