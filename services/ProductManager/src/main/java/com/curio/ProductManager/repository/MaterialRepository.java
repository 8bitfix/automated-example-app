package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Material;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends CrudRepository<Material, Long>, JpaSpecificationExecutor<Material> {
}
