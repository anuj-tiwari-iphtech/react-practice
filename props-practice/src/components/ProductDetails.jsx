

function ProductDetails({name,price,brand = "Ajio",stock}){
    return(
        <>
        <h1>Product Details</h1>
        <p>Product Name : {name}</p>
        <p>Price : {price}</p>
        <p>Brand : {brand}</p>
        <p>Stock Price : {stock}</p>
        </>
    )
}

export default ProductDetails