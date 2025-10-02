import { useState } from "react"; 
import ProductItem from "./components/product-item";

import "./style.css";


const initialState = false
function ProductList({name,city,datalist}){
     
     const [flag, setFlag] = useState(initialState);

     function handleToggleText(){
          setFlag(!flag);
     }

     return(
          <div> 
               <h2 className="title"> ECommerece Project</h2> 
               <button onClick={handleToggleText}>Toggle text</button>

               {
                    flag ? ( 
                    <h4>{name} and {city}</h4> 
                   ):(
                    <h4>Hello</h4>
                   )
               }
  
     <ul>
          {
               datalist.map((item,index)=>(
                    <ProductItem singleProductItem={item} key={index}/>
               ))
          }
     </ul>

     </div>

     )
           
}
export default ProductList;