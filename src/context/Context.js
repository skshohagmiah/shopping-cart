import React, { useContext, useReducer } from 'react';
import Reducer, { initialState } from './Reducer';

const shopContext = React.createContext()


export const GetState = () => useContext(shopContext);


const Context = ({children}) => {

const [state, dispatch] = useReducer(Reducer, initialState)



return <shopContext.Provider value={{state, dispatch}}>
    {children}
  </shopContext.Provider>
}

export default Context