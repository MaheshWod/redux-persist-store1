import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeUser, setUser } from './redux/slices/login-slice'

const Login = () => {

  const {loginSlice} = useSelector((alldata)=>alldata)

const dispatch = useDispatch()

  const [formvalue,setFormvalue] = useState({
    username:loginSlice ? loginSlice.username:'',
    password: loginSlice ? loginSlice.password:''
    // yo condition le data lai box mai showing gari rakhxa, yadi loginSlice ma username xa vane loginSlice.username hoina vane khali
  })
const login = (e)=>{
  e.preventDefault()
  console.log(formvalue)
}
  const handleInput = (e)=>{
    const input = e.target
    const name = input.name;
    const value = input.value
    setFormvalue({
      ...formvalue,
      [name]:value
    })
  }

  const rememberMe = (e)=>{
    const input = e.target
  if(input.checked){
    dispatch(setUser(formvalue))
  }
  else{
    dispatch(removeUser())
  }
  }
  return (
   <>
    <div className="bg-rose-600 flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[450px]">
          <form className="space-y-4" onSubmit={login} >
            <div className="flex flex-col">
              <label className="font-medium text-lg mb-2">Username</label>
              <input 
                className="border border-gray-300 rounded p-3"
                name="username"
                placeholder="@Username"
                type="email"
                required
                value={formvalue.username}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-lg mb-2">Password</label>
              <input 
                className="border border-gray-300 rounded p-3"
                name="password"
                placeholder="*******"
                type="password"
                required
                value={formvalue.password}
                onChange={handleInput}
              />
            </div>

            <div className="flex gap-3 items-`center`">
              <input type="checkbox" onChange={rememberMe} checked={loginSlice ? true : false}/>

{/* yo checked le jaba checkbox ma click garirakheko xa vane reload garda pani same clicked nai dekhauxa */}
              <label>Remember Me !</label>
            </div>

            <button className="bg-indigo-600 py-3 px-8 rounded text-white">Login</button>
          </form>
        </div>
      </div>
   </>
  )
}

export default Login