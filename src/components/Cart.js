import React, { useEffect, useState } from 'react';
import { GetState } from '../context/Context';
import CartProduct from './CartProduct';


const Cart = () => {


const [price,setPrice] = useState();
 const {state:{cart}, dispatch} = GetState();

useEffect(()=>{
  setPrice(cart.reduce( (acc, item) => (acc+=item.price) * item.qty,0))
},[cart])


 let content =null;

 if(cart.length === 0){
  content = <p className='w-full text-center  text-5xl m-8'>Your Cart is Empty</p>
 }
 if(cart.length > 0) {
  content =   <div>
  <div className='flex items-center justify-around bg-gray-300 h-12 shadow-md text-black'>
    <h1 className='text-2xl'>Your Cart</h1>
    <button className='underline text-red-500 text-lg' onClick={()=> dispatch({
      type:'REMOVE-ALL',
    })}>Remove All</button>
  </div>
  {cart.map(item => <CartProduct key={item.id}  item={item} />)}

  <div className=' flex items-center justify-evenly '>
      <div className='flex flex-col'>
        <h1 className='text-2xl text-bold'>Sub-Total</h1>
        <p className='text-sm'>{cart.length} items</p>
      </div>
      <div className='text-2xl'>${price}</div>
  </div>
  <button type='submit ' className='bg-blue-600 hover:bg-blue-800 hover:ring-4 transition-all duration-300 text-center font-3xl text-white block m-auto w-64 lg:w-96 p-4 rounded-full my-4 '>Checkout</button>
</div>
  
 }

return (content)
}

export default Cart