package com.curio.ProductManager.service;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface CrudService<T, X extends CrudRepository<T, Long> & JpaSpecificationExecutor<T>> {

    Optional<T> findById(Long id);
    List<T> findAll();
    List<T> findAll(Map<String, ?> searchParams);
    T create(T item);
    T update(T item);
    Long delete(Map<String, ?> searchParams);

}
