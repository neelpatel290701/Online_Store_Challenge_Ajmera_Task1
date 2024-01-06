import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DetailView from './DetailView';

const MasterView = () => {

    const [products, setProducts] = useState([]);
    const [id, setId] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (er) {
            console.log(er.message);
        }
    }

    const handleClick = (id) => {
        setId(id);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "50%", height: "100vh", overflow: "auto" }}>
                <h2 style={{ margin: "10px 0px" }}>List of Product (Click an item for details)</h2>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>

                    {products.map((product) => {
                        return (
                            <div style={{ cursor: "pointer", display: "flex", border: "1px solid black", borderRadius: "10px", padding: "5px", margin: "5px 10px", width: "80%" }} key={product.id} onClick={() => handleClick(product.id)}>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"7px"}}>
                                    <img src={product?.image} alt={product.id} width={"100px"} height={"100px"} />
                                </div>

                                <div>

                                    <h2>{product.title}</h2>
                                    <p>{product.description.slice(0, 100)}....</p>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>

            <div style={{ width: "50vw" }}>
                <div>
                    {id ? <>
                        <DetailView id={id} />
                    </> :
                        <>
                        </>}
                </div>
            </div>
        </div>
    )
}

export default MasterView
