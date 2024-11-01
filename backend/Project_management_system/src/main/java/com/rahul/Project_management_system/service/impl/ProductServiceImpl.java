package com.rahul.Project_management_system.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rahul.Project_management_system.model.Product;
import com.rahul.Project_management_system.repository.ProductRepository;
import com.rahul.Project_management_system.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product saveProduct(Product product) {

		return productRepository.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

	@Override
	public Product getProductById(Integer id)
	{
		return productRepository.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) 
	{
		Optional<Product> productOptional = productRepository.findById(id);

		if (productOptional.isPresent()) {
			productRepository.delete(productOptional.get());
			return "Product deleted successfully";
		} else {
			return "Product not available";
		}
	}

	@Override
	public Product editProduct(Product product, Integer id) {
		Product oldProduct = productRepository.findById(id).get();

		oldProduct.setProductName(product.getProductName());
		oldProduct.setDescription(product.getDescription());
		oldProduct.setPrice(product.getPrice());
		oldProduct.setStatus(product.getStatus());
		return productRepository.save(oldProduct);
	}

}
