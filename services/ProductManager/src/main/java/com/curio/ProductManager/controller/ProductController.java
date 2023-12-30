package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Product;
import com.curio.ProductManager.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/products")
public class ProductController extends AbstractCrudController<Product, ProductRepository> {
    public ProductController(ProductRepository repository) {
        super(repository);
    }
}
