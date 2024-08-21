import React, { useContext } from "react"

export const ThemeContext = React.createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}


// const UserContextProvider = ({children}) => {

//     const [user, setUser] = useState(null)
//     const [userPassword, setUserPassword] = useState(null)

//     return (
//         <UserContext.Provider value={{user, setUser, userPassword, setUserPassword}}>
//         {children}
//         </UserContext.Provider>
//     )
// }