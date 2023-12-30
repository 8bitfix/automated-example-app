package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Brand;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends CrudRepository<Brand, Long>, JpaSpecificationExecutor<Brand> {
}
