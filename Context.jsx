import { createContext, useContext, useState } from "react";
import { data } from "./src/components/data";

const AppContext=createContext()

const AppProvider=({children})=>{
    const[packages,setPackages]=useState(data)

    return <AppContext.Provider value={{
        packages
    }}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export{useGlobalContext,AppProvider,AppContext}