import { createContext, useEffect, useState } from "react";
import axios from "./axios";
import Loading from "../Components/Loading";
import Failed from "../Components/Failed";

export const productContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) ?? null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);


  async function getProducts() {
    try {
      const { data } = await axios.get("/products");
      localStorage.setItem('products' , JSON.stringify(data)) 
      setProducts(data);
    } catch (err) {
      console.log(err);
      seterror(true);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
   products ? setloading(false) : getProducts();
  }, []);

  useEffect(()=>{
    localStorage.setItem('products' , JSON.stringify(products))
  } , [products])

  return (
    <productContext.Provider value={{products , setProducts}}>
      {loading ? <Loading /> : error ? <Failed /> : children}
    </productContext.Provider>
  );
};

export default Context;
