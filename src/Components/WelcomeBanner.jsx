import React from 'react'
import { styledTitle, StyledSubTitle } from './Styles'
import {Link} from 'react-router-dom'
import {Formik , Form} from 'formik'
import {FiMail , FiLock} from 'react-icons/fi'

export default function WelcomeBanner(){
    return(
        
            <div className='welcome-card'>
                <h1 className='title'>Hello Coffee!</h1>
                <div className='login-options'>
                    <h1>Join today to be paired with the coffee that matches you best.  Create a profile to be paired with your next brew!</h1>
                     <Formik>
                         {()=>(
                            <form className='login-form'>
                                <label>Email:</label>
                                <input  type='email' placeholder='example@email.com'/>
                                <label>Password:</label>
                                <input  type='password' placeholder='Password'/>
                            </form>
                         )}
                     </Formik>
                     <button>Log In</button>
                    <p>New To Us? <Link to='/Signup'>create an account</Link></p>
                </div>
            </div>

      
    )
}