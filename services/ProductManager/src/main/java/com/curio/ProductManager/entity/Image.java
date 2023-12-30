package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "imageIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "imageIdGen")
    private Integer id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT", nullable = false)
    private Product product;

    private String description;

    private String location;

}
