package com.curio.ProductManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Getter
@Setter
@SequenceGenerator(
    name = "userLikeIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class UserLike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "userLikeIdGen")
    private Integer id;

    private String userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PRODUCT", nullable = false)
    private Product product;

}
