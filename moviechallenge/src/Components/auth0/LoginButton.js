import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './styles'

const LoginButton = ()=>{
 
    const { loginWithRedirect } = useAuth0()
    
    return <Button type={'login'}  onClick={()=>loginWithRedirect()}> Login </Button>
}

export default LoginButton