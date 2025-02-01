
import axios from "axios";

 const Products = async() =>{

    const products = await axios.get("http://localhost:3001/api/product/get");
    console.log(products.data);


    return (
        <div>
            frontend to ecommerce api backend
        </div>
    );


}

export default Products;