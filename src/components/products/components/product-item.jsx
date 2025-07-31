import styles from "./product-item.module.css";

function ButtonComponent(){
    // Styling react app:using css module
    return <button className={styles.buttonStyle} >Click</button>;
}

// they are in the same File,so no import export is need to be done for the ProductItem to use ButtonComponent

//here we passed a list of data (singleProductItem) from one component to another component
function ProductItem({singleProductItem,key}){
    return (
    // Styling react app:using inline styling
    <div style = {{padding:'20px', border:'2px solid red', marginBottom:'20px'}} key={key}> 
        <p className={styles.itemStyle}>{singleProductItem}</p>
        <ButtonComponent/>
     </div>)
}

export default ProductItem;

// So we get a nested component as:
// App-> product list-> product item-> button component