package com.curio.ProductManager.service;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class AndSearchSpecification<T, X> implements Specification<T> {
    private final Map<String, X> searchParams;

    public AndSearchSpecification(Map<String, X> searchParams) {
        this.searchParams = searchParams;
    }

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();
        for (Map.Entry<String, X> entry : searchParams.entrySet()) {
            Predicate predicate = builder.equal(root.<String>get(entry.getKey()), entry.getValue());
            predicates.add(predicate);
        }

        return builder.and(predicates.toArray(Predicate[]::new));
    }
}
