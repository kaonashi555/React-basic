import ProductItem from "./components/product-item";

import "./style.css";



// directly destructring here..otherwise the code will be like that:
// function ProductList({props}){
//      const {name,city}=props;   
//      return 
//       <div> 
//         <h3> Name is {name} </h3>
//          <h3> She is from {city} </h3> 
//       </div>
// N.B. must pass the "key name" in the argument & while maping item
function ProductList({name,city,datalist}){
     const flag = false;
     let renderTextBlock = null;
     if (flag){
          renderTextBlock = (
               <h3 className="info"> Name : {name}. City : {city} </h3>
          );
     }else{
          renderTextBlock = <h3>Hello world!</h3>
     }

     

     // Styling react app:using external stylesheet (style.css)
     return <div> <h2 className="title"> ECommerece Project</h2> 
     {renderTextBlock}

     {/* <ProductItem/> */}

     {/* to render a list of data --> */}
     <ul>
          {
               datalist.map((item,index)=>(
                    <ProductItem singleProductItem={item} key={index}/>
               ))
          }
     </ul>

     </div>
}
export default ProductList;