package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "categoryIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "categoryIdGen")
    private Integer id;

    private String name;

    @JsonIgnoreProperties(value = "categories")
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "categories")
    private List<Product> products;

}
