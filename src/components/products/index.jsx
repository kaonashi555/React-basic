import ProductItem from "./components/product-item";

const dummyProductData = ["Product 1", "Produc 2"];

function ProductList(){
     return <div> <h4> ECommerece Project</h4> 
     {/* <ProductItem/> */}

     <ul>
          {
               dummyProductData.map((item,index)=>(
                    <li key={index}>{item}</li>
               ))
          }
     </ul>

     </div>
}
export default ProductList;