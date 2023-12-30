package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.Stock;
import com.curio.ProductManager.repository.StockRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/stock")
public class StockController extends AbstractCrudController<Stock, StockRepository> {
    public StockController(StockRepository repository) {
        super(repository);
    }
}
