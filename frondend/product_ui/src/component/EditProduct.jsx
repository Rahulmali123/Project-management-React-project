import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../service/product.service';

const EditProduct = () => {
    const [product, setProduct] = useState({
        id:" ",
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");

    // Fetch product details when component mounts
    useEffect(() => {
        productService.getProductById(id)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };
    

    const updateProduct = (e) => {
        e.preventDefault();
        productService.editProduct(product)
            .then((res) => {
                console.log("Product updated successfully");
                setMsg("Product updated successfully");
                navigate('/'); // Redirect to home or product list page after update
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Edit Product</div>
                        {msg && <p className="fs-3 text-center text-success">{msg}</p>}
                        <div className="card-body">
                            <form onSubmit={updateProduct}>
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input 
                                        type="text" 
                                        name="productName" 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={product.productName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Description</label>
                                    <input 
                                        type="text" 
                                        name="description" 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={product.description}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Price</label>
                                    <input 
                                        type="text" 
                                        name="price" 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={product.price}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Status</label>
                                    <input 
                                        type="text" 
                                        name="status" 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={product.status}
                                    />
                                </div>
                                <button className="btn btn-primary col-md-12">Update Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
