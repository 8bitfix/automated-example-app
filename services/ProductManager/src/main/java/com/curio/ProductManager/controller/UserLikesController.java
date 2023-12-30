package com.curio.ProductManager.controller;

import com.curio.ProductManager.entity.UserLike;
import com.curio.ProductManager.repository.UserLikeRepository;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/user-likes")
public class UserLikesController extends AbstractCrudController<UserLike, UserLikeRepository> {

    public UserLikesController(UserLikeRepository repository) {
        super(repository);
    }
}
