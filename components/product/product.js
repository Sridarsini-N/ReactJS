import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './product.css'


function ProductPage() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(putdata => setProduct(putdata))
    })
    return (
        <>
       <div className="row text-center">
        <h1>Products List</h1>
                {
                    product.map((value, index) => (
                        <>
                            <div className="card col-lg-4">
                                <img src={value.image} className="card-img-top h-50" />
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.category}</p>
                                    <Link to={`/details/${value.id}`} className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div> 
        </>  
       )    
}

export default ProductPage


             
//         //  /* <h1>{value.title}</h1>
//         //                <h3>{value.category}</h3>
//         //                <img src={value.image}/>
//         //                <hr/> */
//     )
// }

{/* <table border='1'>
<thead>
    <th>Sno</th>
    <th>image</th>
    <th>title</th>
    <th>price</th>
    <th>action</th>
</thead>
{
    product.map((value,index)=>(
        <tbody>
            <td>{value.id}</td>
            <td><img src={value.image} className="product_img"/></td>
            <td>{value.title}</td>
            <td>{value.price}</td>
            <td className="btn">view</td>
        </tbody>
    ))
}
</table> */}

