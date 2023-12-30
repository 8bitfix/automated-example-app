package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "reviewIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "reviewIdGen")
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "PRODUCT", nullable = false)
    @JsonIgnore
    private Product product;

    @Min(1)
    @Max(5)
    @NotNull
    private Integer rating;

    private String value;

}
