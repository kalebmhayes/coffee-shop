import React from 'react'
import {
    StyledTextInput, 
    StyledFormArea, 
    StyledFormButton, 
    StyledLabel, 
    Avatar, 
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from '../Components/Styles'
import Logo from '../logo.svg'

//formik
import { Formik, Form } from 'formik'
import { TextInput } from '../Components/FormLib'
import * as Yup from 'yup'
//icons
import {FiMail , FiLock} from 'react-icons/fi'
//spinner

export default function Login(){
    return(
      <div>
          <StyledFormArea>
              
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>

                <Formik
                   initialValues={{
                    email: "",
                    password: "",
                }}

                onSubmit={(values , {setSubmitting}) =>{
                    console.log(values)
                }}

                validationSchema={
                    Yup.object({
                        email: Yup.string().email('Invalid Email Address').required('Required'),
                        password: Yup.string()
                        .min(8 , 'password too short')
                        .max(30 , 'password is too long')
                    })
                }
                >
                 

                    
                    {() =>(
                        <form>
                            <TextInput
                                name='email'
                                type='text'
                                label='Email Address'
                                placeholder='john.doe@email.com'
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='***********'
                                icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                <StyledFormButton type='submit'>
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </form>
                    )}
                </Formik>
                <ExtraText>
                    New Here? <TextLink to='/Signup'>Signup</TextLink>
                </ExtraText>
          </StyledFormArea>
          <CopyrightText>
              All rights reserved &copy;2020
          </CopyrightText>
      </div>
    )
}