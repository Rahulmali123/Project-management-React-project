package com.rahul.Project_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rahul.Project_management_system.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> 
{

}