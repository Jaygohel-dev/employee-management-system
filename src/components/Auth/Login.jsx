import React, { useState } from 'react'

const login = ({handleLogin}) => {
  

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

   const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
      console.log("Email is:",email) 
      console.log("password is:",password)

      setemail("")
      setpassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600'> 

          <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className=' flex flex-col item-center justfy-center bg-trasnparent p-20'>
            <input
             value={email}
             onChange={(e)=>{
             setemail(e.target.value)
             }}
             required className=' outline-none bg-transparent border-2 text-xl py-3 px-5 border-emerald-600 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
            setpassword(e.target.value)
            }}
            required className='textoutline-none bg-transparent border-2 text-xl py-3 px-5 border-emerald-600 rounded-full placeholder:text-grey-400 mt-3' type="password" placeholder='Enter your password' />
            <button  className='mt-5 text-white bg-emerald-600 text-black outline-none border-2 text-xl py-3 px-5  rounded-full placeholder:text-white mt-3'>Log in</button>
          </form>

        </div>
    </div>
  )
}

export default login