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
    name = "productIdGen",
    sequenceName = "HIBERNATE_SEQUENCE",
    allocationSize = 1
)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "productIdGen")
    private Integer id;

    private String name;

    private String description;

    private Double price;

    @Column(name = "OVERALL_RATING")
    private Double overallRating;

    @Column(name = "TOTAL_REVIEWS")
    private Long totalReviews;

    @JsonIgnoreProperties(value = "products")
    @ManyToOne
    @JoinColumn(name = "BRAND", nullable = false)
    private Brand brand;

    @JsonIgnoreProperties(value = "products")
    @ManyToMany
    @JoinTable(
            name = "PRODUCT_CATEGORY",
            joinColumns = @JoinColumn(name = "PRODUCT"),
            inverseJoinColumns = @JoinColumn(name = "CATEGORY")
    )
    private List<Category> categories;

    @JsonIgnoreProperties(value = "products")
    @ManyToMany
    @JoinTable(
            name = "PRODUCT_COLOUR",
            joinColumns = @JoinColumn(name = "PRODUCT"),
            inverseJoinColumns = @JoinColumn(name = "COLOUR")
    )
    private List<Colour> colours;

    @OneToMany(mappedBy="product", cascade = CascadeType.ALL)
    private List<Image> images;

    @JsonIgnoreProperties(value = "products")
    @ManyToMany
    @JoinTable(
            name = "PRODUCT_MATERIAL",
            joinColumns = @JoinColumn(name = "PRODUCT"),
            inverseJoinColumns = @JoinColumn(name = "MATERIAL")
    )
    private List<Material> materials;

    @ManyToOne
    @JoinColumn(name = "SHIPPING_INFO", nullable = false)
    private ShippingInfo shippingInfo;

    @JsonIgnoreProperties(value = "products")
    @ManyToMany
    @JoinTable(
            name = "PRODUCT_SIZE",
            joinColumns = @JoinColumn(name = "PRODUCT"),
            inverseJoinColumns = @JoinColumn(name = "SIZE")
    )
    private List<Size> sizes;

    @OneToMany(mappedBy="product", cascade = CascadeType.ALL)
    private List<Care> careInstructions;

    @OneToMany(mappedBy="product", cascade = CascadeType.ALL)
    private List<Highlight> highlights;

    public void setCareInstructions(List<Care> careInstructions) {
        this.careInstructions = careInstructions;
        this.careInstructions.forEach(instruction -> instruction.setProduct(this));
    }

    public void setHighlights(List<Highlight> highlights) {
        this.highlights = highlights;
        this.highlights.forEach(highlight -> highlight.setProduct(this));
    }

    public void setImages(List<Image> images) {
        this.images = images;
        this.images.forEach(image -> image.setProduct(this));
    }
}
