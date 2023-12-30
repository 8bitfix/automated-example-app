package com.curio.ProductManager.repository;

import com.curio.ProductManager.entity.Image;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long>, JpaSpecificationExecutor<Image> {
}
