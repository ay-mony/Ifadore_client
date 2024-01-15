import { useContext, useState } from 'react'
import './login.scss'
import { loginUser } from '../../services/context/auth/apiCall'
import { AuthContext } from '../../services/context/auth/authContext'

const Login = () => {

  const { dispatch, error, loading} = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleLogin = (e:any) => {
    e.preventDefault()
    loginUser({email, password}, dispatch)
  }

  return (
    <div className='login'>
      <form 
        className="login__cont" 
        autoComplete='off' 
        onSubmit={handleLogin}
      >
        <img src="ifadore.png" alt="" />
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder='Email' 
          onChange={(e)=>setEmail(e.target.value)} 
          required min={8}
        />
        <input 
          type="password" 
          placeholder='Password' 
          onChange={(e)=>setPassword(e.target.value)} 
          required min={8} 
        />
        <button type='submit' disabled={loading}>Login</button>
        {error && <span className='err'>Please Enter a valid username and password</span>}
      </form>
    </div>
  )
}

export default Login
