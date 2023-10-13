package com.naveena.stockmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveena.stockmanagement.Model.Review;


@Repository
public interface ReviewRepo extends JpaRepository<Review,Integer> {
    
}
