package com.curio.ProductManager.controller;

import com.curio.ProductManager.service.CrudService;
import com.curio.ProductManager.service.CrudServiceImpl;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public abstract class AbstractCrudController<T, X extends CrudRepository<T, Long> & JpaSpecificationExecutor<T>> {

    private final CrudService<T, X> crudService;

    public AbstractCrudController(X repository) {
        this.crudService = new CrudServiceImpl<>(repository);
    }

    @GetMapping
    public List<T> getItems(@RequestParam Map<String, ?> params) {
        return this.crudService.findAll(params);
    }

    @Transactional
    @DeleteMapping
    public ResponseEntity<?> deleteItems(@RequestParam Map<String, ?> params) {
        if (params == null || params.isEmpty()) {
            return ResponseEntity.badRequest().body("No filter passed into delete endpoint - no rows will be deleted");
        } else {
            this.crudService.delete(params);
            return ResponseEntity.ok().body(null);
        }
    }

    @Transactional
    @DeleteMapping("/all")
    public void deleteAllItems() {
        this.crudService.delete(new HashMap<>());
    }

    @PostMapping
    public T saveItems(@RequestBody T item) {
        return this.crudService.create(item);
    }
}
