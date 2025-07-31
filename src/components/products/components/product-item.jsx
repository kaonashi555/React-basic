function ButtonComponent(){
    return <bottun>Click</bottun>;
}

// they are in the same File,so no import export is need to be done for the ProductItem to use ButtonComponent

//here we passed a list of data (singleProductItem) from one component to another component
function ProductItem({singleProductItem}){
    return (
    <div> 
        <p>{singleProductItem}</p>
        <ButtonComponent/>
     </div>)
}

export default ProductItem;

// So we get a nested component as:
// App-> product list-> product item-> button component