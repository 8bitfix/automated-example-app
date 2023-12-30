package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "stockIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "stockIdGen")
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PRODUCT", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "SIZE", nullable = false)
    private Size size;

    @ManyToOne
    @JoinColumn(name = "COLOUR", nullable = false)
    private Colour colour;

    private Integer amount;

}
