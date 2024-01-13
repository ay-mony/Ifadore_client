import { useState } from 'react'
import './login.scss'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)


  const handleLogin = async (e:any) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', {
        email,
        password
      })
      localStorage.setItem('user', JSON.stringify(res.data))
      window.location.replace('/')
      
    } catch (error) {
        setError(true)
    }
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
        <button type='submit'>Login</button>
        {error && <span className='err'>Please Enter a valid username and password</span>}
      </form>
    </div>
  )
}

export default Login
