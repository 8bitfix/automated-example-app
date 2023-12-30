package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "colourIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Colour {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "colourIdGen")
    private Integer id;

    private String name;

    @JsonIgnoreProperties(value = "colours")
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "colours")
    private List<Product> products;
//
//    @JsonIgnoreProperties(value = "colour")
//    @OneToMany(fetch=FetchType.LAZY, mappedBy="colour")
//    private List<Stock> stock;

}
