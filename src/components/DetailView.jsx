import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DetailView = ({ id }) => {

    const [products, setProducts] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProducts(response.data);

        } catch (er) {
            console.log(er.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div style={{ padding: "20px" }}>
            {
                products ? <>
                    <div style={{ padding: "10px", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            {
                                products?.image ?
                                    <img src={products.image} alt={products.id} width={"200px"} height={"200px"} />
                                    : <></>
                            }
                        </div>
                        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", fontWeight: "bold", width: "fit-content" }}>
                            {products?.category}
                        </div>

                        <div>
                            <h1>{products?.title}</h1>
                        </div>
                        <div>
                            <p>{products?.description}</p>
                        </div>

                        <div>
                            <p>Price: {products?.price}</p>
                        </div>


                        <div>
                            <p>Rate: {products?.rating?.rate}</p>
                        </div>

                        <div>
                            <p>Count: {products?.rating?.count}</p>
                        </div>
                    </div>
                </> :
                    <>
                     <h2> Select an item to display</h2>
                    </>
            }
        </div>
    )
}

export default DetailView
