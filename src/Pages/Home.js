import React from 'react'
import WelcomeBanner from '../Components/WelcomeBanner'
import { StyledSubTitle , StyledTitle , Avatar , StyledButton , ButtonGroup} from '../Components/Styles'
import Logo from '../logo.svg'

export default function Home(){
    // return(
    //     <div>
    //         <WelcomeBanner/>
    //     </div>
    // )

    return(
        <div>
            <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'transparent',
                width: '100%',
                padding: '15px',
                display: 'flex',
                justifyContent: 'flex-start'
            }}
            >
                <Avatar image={Logo}/>
            </div>
            <StyledTitle size={60}>
                Welcome to Hello Coffee
            </StyledTitle>
            
            <StyledSubTitle size={27}>
                Feel Free To Explore Our Page
            </StyledSubTitle>
            
            <ButtonGroup>
                <StyledButton to='/Login'>Login</StyledButton>
                <StyledButton to ='/Signup'>Signup</StyledButton>
            </ButtonGroup>
        </div>
    )
}