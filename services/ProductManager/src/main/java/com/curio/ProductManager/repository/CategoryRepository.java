package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Category;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>, JpaSpecificationExecutor<Category> {
}
