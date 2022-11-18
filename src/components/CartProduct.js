import React from 'react'
import { GetState } from '../context/Context'

const CartProduct = ({item}) => {

const { dispatch} = GetState()

return (
    <div className='flex items-center justify-around bg-gray-200  m-4 space-x-2 rounded-lg shadow-lg'>
        <img src={item.thumbnail} className="w-20 rounded m-3 lg:m-6 aspect-auto object-cover" alt={item.description} />
        <h1 className='text-xl'>{item.title}</h1>
        <select className='w-20 p-1 ' onChange={(e) => dispatch({
            type:'CHANGE-QUANTITY',
            payload:{
                id:item.id,
                qty:e.target.value
            }
        })}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <p className='text-xl'>${item.price * item.qty}</p>
    </div>
  )
}

export default CartProduct