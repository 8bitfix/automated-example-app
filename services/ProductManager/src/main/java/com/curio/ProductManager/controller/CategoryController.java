package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Category;
import com.curio.ProductManager.repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/categories")
public class CategoryController extends AbstractCrudController<Category, CategoryRepository> {

    public CategoryController(CategoryRepository repository) {
        super(repository);
    }
}
