import React from 'react'
import WelcomeBanner from '../Components/WelcomeBanner'
import 
{ StyledSubTitle, 
    StyledTitle , 
    Avatar , 
    StyledButton ,
    ButtonGroup,
    StyledFormArea,
    colors
} from '../Components/Styles'
import Logo from '../logo.svg'

export default function Dashboard(){
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

            <StyledFormArea bg={colors.dark2 }>
                <StyledTitle size={60}>
                    Welcome User
                </StyledTitle> 
                <ButtonGroup>
                    <StyledButton to='/Login'>Logout</StyledButton>
                </ButtonGroup>

            </StyledFormArea>
      
        </div>
    )
}