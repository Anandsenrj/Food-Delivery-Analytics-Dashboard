package fooddelivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fooddelivery.dto.LoginRequest;
import fooddelivery.dto.LoginResponse;
import fooddelivery.security.JwtService;

@Service
public class AuthService {

    @Autowired
    private JwtService jwtService;

    // Change these credentials before deployment
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "admin123";

    public LoginResponse login(LoginRequest request) {

        if (!ADMIN_USERNAME.equals(request.getUsername()) ||
            !ADMIN_PASSWORD.equals(request.getPassword())) {

            throw new RuntimeException("Invalid username or password");

        }

        String token = jwtService.generateToken(request.getUsername());

        return new LoginResponse(token);
    }
}