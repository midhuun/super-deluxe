import { createContext, useContext, useState } from "react"

export const MenuProvider = createContext<any>(null)
const MenuContext = ({children}:{children:any}) => {
    const [menu, setMenu] = useState<any>(false);
    const [isAuthenticated,setisAuthenticated] = useState(false);
  return (
    <MenuProvider.Provider value={{menu,setMenu,isAuthenticated,setisAuthenticated}}>
        {children}
    </MenuProvider.Provider>
  )
}

export default MenuContext