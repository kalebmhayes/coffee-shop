import { useField } from "formik";
import {useState} from 'react'
import {
    StyledTextInput,
    StyledLabel,
    StyledIcons,
    ErrorMsg
} from './Styles'

//eye for password

import {FiEyeOff , FiEye} from 'react-icons/fi'

export const TextInput = ({icon, ...props}) => {
    const [show , setShow] = useState(false)
    const[field , meta] = useField(props);

    return(

        // generates label and input box for form

        <div style={{position:"relative"}}>
            {/* generates the label */}
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            
            {/* generates input depending on type property */}
           {
           props.type !== 'password' && 
                <StyledTextInput 
                invalid={meta.touched && meta.error}
                {...field} 
                {...props}
                />
           }

            {
            props.type === 'password' && (
                <StyledTextInput
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type={show ? 'text':'password'}
                />
                )
            }
            <StyledIcons>{icon}</StyledIcons>
            
            {/* creates the eye if input type is password */}
            {props.type === 'password' && (
                <StyledIcons onClick ={() => setShow(!show)} right>
                   {show && <FiEye/>}
                    {!show &&<FiEyeOff/>}
                </StyledIcons>
            )}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility: 'hidden'}}>.</ErrorMsg>
            )}
        </div>
    )
}

