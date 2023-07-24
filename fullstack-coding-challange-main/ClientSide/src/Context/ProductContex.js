import { createContext, useState } from "react"


export const NotiContext = createContext(); 

export default function ContextProduct({children}){
    const [num ,setNum] = useState(null);
    const [addProduct , setAddProduct] = useState([])
    return<>
       <NotiContext.Provider value={{num , setNum , addProduct, setAddProduct }}>
         {children}
       </NotiContext.Provider>
    </>
}