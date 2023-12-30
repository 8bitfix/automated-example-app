package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Care;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareRepository extends CrudRepository<Care, Long>, JpaSpecificationExecutor<Care> {
}
