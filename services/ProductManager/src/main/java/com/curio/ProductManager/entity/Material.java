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
    name = "materialIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "materialIdGen")
    private Integer id;

    private String name;

    @JsonIgnoreProperties(value = "materials")
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "materials")
    private List<Product> products;

}
