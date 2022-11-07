import React, {useContext, useEffect} from 'react';
import axios from 'axios';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  
  async function chuckNorris() {
    try {
      const response = await axios.get("https://api.chucknorris.io/jokes/random")
      const chuckResp = await response.data.value
      console.log(chuckResp);
    } 
    catch(error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    chuckNorris()
  }, [])

  return <AppContext.Provider value={{name:"nico", role:"student"}}>
      {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}