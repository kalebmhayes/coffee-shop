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
import {FiMail , FiLock, FiUser, FiCalendar} from 'react-icons/fi'
//spinner

export default function Signup(){
    return(
      <div>
          <StyledFormArea>
              
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>Member Signup</StyledTitle>

                <Formik
                   initialValues={{
                    email: "",
                    password: "",
                    repeatPassword: "",
                    dateOfBirth: "",
                    name: ""
        
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
                        .required("Required"),
                        name: Yup.string().required("Required"),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string().required("Required")
                            .oneOf([Yup.ref("password")] , "Passwords Must Match")

                    })
                }
                >
                 

                    
                    {() =>(
                        <form>
                            <TextInput
                                name='name'
                                type='text'
                                label='Full Name'
                                placeholder='John Doe'
                                icon={<FiUser/>}
                            />

                            <TextInput
                                name='email'
                                type='text'
                                label='Email Address'
                                placeholder='john.doe@email.com'
                                icon={<FiMail/>}
                            />
                                <TextInput
                                name='dateOf'
                                type='text'
                                label='Date of Birth' 
                                icon={<FiCalendar/>}
                            />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='***********'
                                icon={<FiLock/>}
                            />
                            <TextInput
                                name='repeatPassword'
                                type='password'
                                label='Confirm Password'
                                placeholder='***********'
                                icon={<FiLock/>}
                            />
                            <ButtonGroup>
                                <StyledFormButton type='submit'>
                                    Signup
                                </StyledFormButton>
                            </ButtonGroup>
                        </form>
                    )}
                </Formik>
                <ExtraText>
                    Already A Member? <TextLink to='/Login'>Login</TextLink>
                </ExtraText>
          </StyledFormArea>
          <CopyrightText>
              All rights reserved &copy;2020
          </CopyrightText>
      </div>
    )
}