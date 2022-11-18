import React from 'react'
import { GetState } from '../context/Context'

const Product = ({item}) => {

 const {state:{cart}, dispatch} = GetState()

  
 

  return (
    <section className='bg-white/90 shadow-md rounded-md flex flex-col justify-end items-base gap-1 p-4 '>
        <div>
           <img src={item.thumbnail} alt={item.category} className='aspect-square object-cover object-center w-full lg:hover:scale-105 transition duration-300 rounded-md overflow-hidden' /> 
        </div>

        <span className='bg-violet-300 w-fit p-1 m-1 text-violet-900 rounded'>{item.category}</span>

        <div className=' p-1 flex justify-between align-end'>
           <p className='text-bold text-3xl'> {item.title} </p> 
           <p className='text-2xl text-bold p-1'> ${item.price} </p> 
        </div>

        <div>
            {cart.some(p => p.id === item.id)
            ?
            (   <button type='submit' className='capitalize text-lg text-white bg-red-700 hover:bg-red-800 transition-all rounded-md w-full p-1' onClick={() => dispatch({
              type:'REMOVE-FROM-CART',
              payload: item.id
          })} >remove from cart</button>  )
            :
            (
              <button type='submit' className='capitalize text-lg text-white bg-blue-700 hover:bg-blue-800 transition-all rounded-md w-full p-1' onClick={() => dispatch({
                type:'ADD-TO-CART',
                payload: item
              })} >add to cart</button>

            ) }
        </div>
    </section>
  )
}

export default Product