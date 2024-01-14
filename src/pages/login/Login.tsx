import { useContext, useState } from 'react'
import './login.scss'
<<<<<<< HEAD
import { loginUser } from '../../services/context/auth/apiCall'
import { AuthContext } from '../../services/context/auth/authContext'
=======
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9

const Login = () => {

  const { dispatch, error, loading} = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const navigate = useNavigate()


  const handleLogin = (e:any) => {
    e.preventDefault()
<<<<<<< HEAD
    loginUser({email, password}, dispatch)
  }

=======

    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', {
        email,
        password
      })
      localStorage.setItem('user', JSON.stringify(res.data))
      navigate('/')
    } catch (error) {
        setError(true)
    }
  }


>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
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
<<<<<<< HEAD
        <button type='submit' disabled={loading}>Login</button>
        {error && <span className='err'>Please Enter a valid username and password</span>}
=======
        <button type='submit'>Login</button>
        {error && <span>Please Enter a valid username and password</span>}
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
      </form>
    </div>
  )
}

export default Login
