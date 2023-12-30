package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Colour;
import com.curio.ProductManager.repository.ColourRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/colours")
public class ColourController extends AbstractCrudController<Colour, ColourRepository> {

    public ColourController(ColourRepository repository) {
        super(repository);
    }
}
