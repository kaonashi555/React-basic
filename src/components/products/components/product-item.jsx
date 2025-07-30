function ButtonComponent(){
    return <bottun>Click it!</bottun>;
}

// they are in the same File,so no import export is need to be done for the ProductItem to use ButtonComponent

function ProductItem(){
    return (
    <div> 
        <p>Product 1</p>
        <ButtonComponent/>
     </div>)
}

export default ProductItem;

// So we get a nested component as:
// App-> product list-> product item-> button component