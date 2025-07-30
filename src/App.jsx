import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FuctionalComponent from "./components/functional-component";
import ProductList from "./components/products";
function App() {
  

  return (
      <div>
        <h1> React JS Concepts</h1>
        {/* <ClassBasedComponent/>
        <FuctionalComponent/> */}
        <ProductList/>
      </div>
  );
}

export default App;
