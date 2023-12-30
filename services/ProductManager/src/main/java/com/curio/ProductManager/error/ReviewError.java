package com.curio.ProductManager.error;

public class ReviewError extends Exception {

    private final int status;

    public ReviewError(final String message, final int status) {
        super(message);
        this.status = status;
    }
}
