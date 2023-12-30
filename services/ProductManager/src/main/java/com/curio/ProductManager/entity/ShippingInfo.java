package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "shippingInfoIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class ShippingInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "shippingInfoIdGen")
    private Integer id;

    private String name;

    private String description;

    private Float price;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy="shippingInfo")
    private List<Product> products;

}
