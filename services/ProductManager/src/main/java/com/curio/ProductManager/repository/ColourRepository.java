package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Colour;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColourRepository extends CrudRepository<Colour, Long>, JpaSpecificationExecutor<Colour> {
}
