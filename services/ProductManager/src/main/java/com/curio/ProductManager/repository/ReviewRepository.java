package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Review;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long>, JpaSpecificationExecutor<Review> {
}
