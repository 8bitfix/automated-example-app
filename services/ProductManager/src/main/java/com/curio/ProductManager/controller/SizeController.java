package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Size;
import com.curio.ProductManager.repository.SizeRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/sizes")
public class SizeController extends AbstractCrudController<Size, SizeRepository> {

    public SizeController(SizeRepository repository) {
        super(repository);
    }
}
