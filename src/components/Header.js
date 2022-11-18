import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { GetState } from '../context/Context'

const Header = () => {
const inputRef = useRef(null);
const {state:{filter,cart},dispatch} = GetState();
const [input, setInput] = useState(filter);

 useEffect(()=>{
  dispatch({type:'SEARCHED',payload:input})
 },[input,dispatch]);

 useEffect(() => {
    inputRef.current.focus()
 },[]);

return (
    <div className='bg-blue-500 text-white w-full h-16 flex items-center justify-around shadow-lg sticky top-0 z-10'>
        <div>
            <Link to='/' className='text-bold text-md lg:text-xl tex-g uppercase hover:ring-2 rounded-md p-2' >home</Link>
        </div>
        <div className=''>
            <input type='search' ref={inputRef} className=' w-auto p-1 lg:w-96  lg:p-2 rounded-md focus:ring-4 border-1 text-black' placeholder='Search a Product...'  
            value={input}onChange={(e)=> setInput(e.target.value)}/>
        </div>
        <div className='text-bold text-sm lg:text-xl uppercase rounded-md p-2'>
            <Link to='/cart' className='flex gap-1'>
            <AiOutlineShoppingCart className='lg:w-[3rem] lg:h-[3rem] h-[2rem] w-[2rem] ' />
            <span>{cart.length}</span>
           
            </Link>
        </div>
    </div>
  )
}

export default Header