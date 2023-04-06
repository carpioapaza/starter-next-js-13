'use client';
import {createContext, useContext, useEffect, useState} from 'react';

export const PietraContext = createContext();
export const usePietra = () => {
  const context = useContext(PietraContext);
  if (!context) throw new Error('PietraTast must used within a provider');
  return context;
};
export const PietraProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(() => {
    // Utiliza Local Storage para recuperar el estado de autenticación al cargar la página
    if (typeof window !== 'undefined') {
      const lsLogged = localStorage.getItem('isAuthenticated');
      return lsLogged !== null ? JSON.parse(lsLogged) : false;
    }
    return false;
  });

  useEffect(() => {
    // Almacena el estado de autenticación en Local Storage cada vez que cambia
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', JSON.stringify(isLogged));
    }
  }, [isLogged]);
  const loginPage = () => {
    setIsLogged(true);
  };
  const logoutPage = () => {
    setIsLogged(false);
  };

  return (
    <PietraContext.Provider value={{isLogged, loginPage, logoutPage}}>
      {children}
      {/* <PietraContext.Provider value={[items]}>{children} */}
    </PietraContext.Provider>
  );
};
