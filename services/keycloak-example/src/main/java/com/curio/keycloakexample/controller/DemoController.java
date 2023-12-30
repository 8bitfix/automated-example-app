
package com.curio.keycloakexample.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curio.keycloakexample.model.SenderResponse;

@RestController
@RequestMapping(value = "/api")
@PreAuthorize("isAuthenticated()")
public class DemoController {

	@GetMapping(value="/admin")
	@PreAuthorize("hasRole('ROLE_CLIENT_ROLE_ADMIN')")
	public SenderResponse adminEndPoint() {
		return new SenderResponse("Hello From Admin");
	}
	@GetMapping(value="/manager")
	@PreAuthorize("hasRole('ROLE_CLIENT_ROLE_MANAGER')")
	public SenderResponse managerEndPoint() {
		return new SenderResponse("Hello From Manager");
	}
}