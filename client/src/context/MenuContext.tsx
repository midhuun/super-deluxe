import { createContext, useContext, useState } from "react"

export const MenuProvider = createContext<any>(null)
const MenuContext = ({children}:{children:any}) => {
    const [menu, setMenu] = useState<any>(false);
  return (
    <MenuProvider.Provider value={{menu,setMenu}}>
        {children}
    </MenuProvider.Provider>
  )
}

export default MenuContext