package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.ShippingInfo;
import com.curio.ProductManager.repository.ShippingInfoRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/shipping-infos")
public class ShippingInfoController extends AbstractCrudController<ShippingInfo, ShippingInfoRepository> {

    public ShippingInfoController(ShippingInfoRepository repository) {
        super(repository);
    }
}
