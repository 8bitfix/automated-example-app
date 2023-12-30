package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Brand;
import com.curio.ProductManager.repository.BrandRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/brands")
public class BrandController extends AbstractCrudController<Brand, BrandRepository> {

    public BrandController(BrandRepository repository) {
        super(repository);
    }
}
