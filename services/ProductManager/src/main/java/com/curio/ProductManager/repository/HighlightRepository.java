package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Highlight;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HighlightRepository extends CrudRepository<Highlight, Long>, JpaSpecificationExecutor<Highlight> {
}
