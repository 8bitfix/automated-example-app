package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Material;
import com.curio.ProductManager.repository.MaterialRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/materials")
public class MaterialController extends AbstractCrudController<Material, MaterialRepository> {

    public MaterialController(MaterialRepository repository) {
        super(repository);
    }
}
