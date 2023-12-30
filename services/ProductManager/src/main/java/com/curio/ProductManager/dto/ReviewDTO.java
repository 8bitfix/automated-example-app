package com.curio.ProductManager.dto;

import java.util.Map;

public record ReviewDTO(Integer rating, String value, Map<String, Integer> product) {}
