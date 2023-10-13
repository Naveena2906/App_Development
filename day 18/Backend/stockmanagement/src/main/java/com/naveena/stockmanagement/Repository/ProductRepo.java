package com.naveena.stockmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveena.stockmanagement.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    
}
