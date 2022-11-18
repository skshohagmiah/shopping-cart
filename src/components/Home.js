import React, { useEffect } from 'react';
import { GetState } from '../context/Context';
import Loading from './Loading';
import Product from './Product';

const Home = () => {

const {state:{products,filter}, dispatch} = GetState()




useEffect(() => {
  const fetchProducts = async() => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${filter}`)
    const response = await res.json()
    const data = await response
    dispatch({
        type:'ADD-TO-STATE',
        payload: data.products
    })}; 
    fetchProducts()
},[filter,dispatch]);



let content = null;

if(products.length === 0){
    return <><Loading /><Loading /><Loading /><Loading /></>
    
}

if(products.length > 0){
   content = products.map((item) => <Product key={item.id} item={item} /> )
}

  return (
    <div className='bg-blue-200 '>
      <div  className=' w-full h-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 grid-flow-row '>{content}
      </div>
    </div>
  )
}

export default Home