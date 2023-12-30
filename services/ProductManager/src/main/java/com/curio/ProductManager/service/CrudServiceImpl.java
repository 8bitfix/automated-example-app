package com.curio.ProductManager.service;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public class CrudServiceImpl<T, X extends CrudRepository<T, Long> & JpaSpecificationExecutor<T>>
                implements CrudService<T, X> {
    private final X repository;

    public CrudServiceImpl(X repository) {
        this.repository = repository;
    }

    public Optional<T> findById(Long id) {
        return repository.findById(id);
    }
    public List<T> findAll() {
        return Streamable.of(repository.findAll()).toList();
    }
    public List<T> findAll(Map<String, ?> searchParams) {
        AndSearchSpecification<T, ?> andSearchSpecification = new AndSearchSpecification<>(searchParams);
        return Streamable.of(repository.findAll(andSearchSpecification)).toList();
    }
    public T create(T item) {
        return repository.save(item);
    }
    public T update(T item) {
        return repository.save(item);
    }
    public Long delete(Map<String, ?> searchParams) {
        AndSearchSpecification<T, ?> andSearchSpecification = new AndSearchSpecification<>(searchParams);
        return repository.delete(andSearchSpecification);
    }
}
