package com.rahul.Project_management_system.service;

import java.util.List;

import com.rahul.Project_management_system.model.Product;

public interface ProductService 
{
	public Product saveProduct(Product product);
	
	public Product editProduct(Product product,Integer id);
	
	public List<Product> getAllProduct();
	
	public Product  getProductById(Integer id);
	
	public String deleteProduct(Integer id);
}
