import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FuctionalComponent from "./components/functional-component";
import ProductList from "./components/products";


// this dummyProductData was in index.jsx file,but here- let's pass it as a prop
const dummyProductData = ["Product 1", "Produc 2", "Produc 3", "Produc 4"];


function App() {
  return (
      <div>
        <h1> React JS Concepts</h1>
        {/* <ClassBasedComponent/>
        <FuctionalComponent/> */}
        <ProductList datalist={dummyProductData} name="Afia" city="Kishoreganj"/>
      </div>
  );
}

export default App;
