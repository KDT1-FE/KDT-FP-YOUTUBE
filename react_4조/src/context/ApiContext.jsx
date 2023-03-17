import { createContext, useContext, useState } from "react";
// import Youtube from "../service/mockYoutube";
import Youtube from "../service/Youtube";

export const ApiContext = createContext();


const youtube = new Youtube();


export function ApiProvider({ children }) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = ()=>{
    setDarkMode(prev => !prev);
  } 

  return (
    <ApiContext.Provider value={{ youtube, darkMode, toggleDarkMode}}>{children}</ApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(ApiContext);
}
