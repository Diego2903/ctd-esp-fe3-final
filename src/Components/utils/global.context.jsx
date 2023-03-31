import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import axios from "axios";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [medicos, setMedicos] = useState([])
  console.log(medicos);
  const url = "https://jsonplaceholder.typicode.com/users"


  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(url)
        setMedicos(response.data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextGlobal.Provider value={{ state, dispatch, medicos }}>
      {children}
    </ContextGlobal.Provider>
  );
};
