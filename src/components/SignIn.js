import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import '../styles.css'

const SignIn = () => {
    const login = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider);
    }

    return (
        <div>
            <h1 className='signin_h'>sign in</h1>
            <div className='signin'>

                <GoogleButton onClick={login} />
            </div>
        </div>
    )
}
export default SignIn