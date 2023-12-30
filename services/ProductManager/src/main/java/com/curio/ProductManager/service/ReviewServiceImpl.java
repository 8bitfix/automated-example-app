package com.curio.ProductManager.service;

import com.curio.ProductManager.dto.ReviewDTO;
import com.curio.ProductManager.entity.Product;
import com.curio.ProductManager.entity.Review;
import com.curio.ProductManager.error.ReviewError;
import com.curio.ProductManager.repository.ProductRepository;
import com.curio.ProductManager.repository.ReviewRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;

    public ReviewServiceImpl(final ReviewRepository reviewRepository,
                             final ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
    }

    public Review createReview(final ReviewDTO reviewDTO) throws ReviewError {
        final Review review = new Review();
        review.setRating(reviewDTO.rating());
        review.setValue(reviewDTO.value());

        final Product product = productRepository.findById(Long.valueOf(reviewDTO.product().get("id")))
                .orElseThrow(() -> new ReviewError("Product for review not found", HttpStatus.NOT_FOUND.value()));

        final long newTotalReviews = product.getTotalReviews() == null ? 1 : product.getTotalReviews() + 1;
        final double newOverAllRating = product.getOverallRating() == null ? reviewDTO.rating() :
                (product.getOverallRating() * (newTotalReviews - 1) + reviewDTO.rating()) / newTotalReviews;
        product.setTotalReviews(newTotalReviews);
        product.setOverallRating(newOverAllRating);

        review.setProduct(product);
        return this.reviewRepository.save(review);
    }
}
