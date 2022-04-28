import React from 'react'
import {Link} from 'react-router-dom'
import { Formik, Form } from 'formik'

export default function SignupForm(){
    return(
            <div className='body'>
                <div className='card'>
                    <h1 className='title'>Create An Account</h1>

                    <Formik>
                         {()=>(
                        <form className='login-form '>
                            <label>First Name</label>
                            <input type='text' placeholder='Jane'/>
                            <label>Last Name</label>
                            <input type='text' placeholder='Doe'/>
                            <label>Email</label>
                            <input type='email' placeholder='someone@email.com'/>
                            <label>Create a Password</label>
                            <input type='password' place holder='minimum of 8 charachters' minLength='8'/>
                            <label>Confirm Password</label>
                            <input type='text' minLength='8'/>

                            <p>Already Have an account? <Link  className='link' to='/'>Login</Link></p>
                        </form>
                           
                         )}
                     </Formik>
                </div>
            </div>

    )
}