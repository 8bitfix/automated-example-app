package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "brandIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "brandIdGen")
    private Integer id;

    private String name;

    @JsonIgnoreProperties(value = "brand")
    @OneToMany(fetch = FetchType.LAZY, mappedBy="brand")
    @Fetch(FetchMode.SUBSELECT)
    private List<Product> products;

}
