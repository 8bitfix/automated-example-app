package com.curio.ProductManager.controller;

import com.curio.ProductManager.dto.ReviewDTO;
import com.curio.ProductManager.entity.Review;
import com.curio.ProductManager.error.ReviewError;
import com.curio.ProductManager.repository.ReviewRepository;
import com.curio.ProductManager.service.CrudService;
import com.curio.ProductManager.service.ReviewServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewServiceImpl reviewService;
    public ReviewController(ReviewServiceImpl reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public Review create(@RequestBody ReviewDTO reviewDTO) throws ReviewError {
        return reviewService.createReview(reviewDTO);
    }
}
