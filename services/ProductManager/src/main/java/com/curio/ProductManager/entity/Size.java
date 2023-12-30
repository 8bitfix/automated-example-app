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
    name = "sizeIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "sizeIdGen")
    private Integer id;

    private String value;

    @JsonIgnoreProperties(value = "sizes")
    @ManyToMany(fetch = FetchType.LAZY,mappedBy = "sizes")
    private List<Product> products;
//
//    @JsonIgnoreProperties(value = "size")
//    @OneToMany(fetch=FetchType.LAZY, mappedBy="size")
//    private List<Stock> stock;

}
