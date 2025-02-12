package com.server;

import org.springframework.web.bind.annotation.*;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.PreparedStatement;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private final String sharedKey = "SHARED_KEY";

    private static final String SUCCESS_STATUS = "success";
    private static final String ERROR_STATUS = "error";
    private static final int CODE_SUCCESS = 100;
    private static final int AUTH_FAILURE = 102;

    String url = "jdbc:postgresql://127.0.0.1:5432/pgs";
    String username = "username";
    String password = "pgspgs";




    @GetMapping
    public BaseResponse showStatus() {
        return new BaseResponse(SUCCESS_STATUS, 1);
    }

    @PostMapping("/pay")
    public BaseResponse pay(@RequestParam(value = "key") String key, @RequestBody PaymentRequest request) {

        final BaseResponse response;

        if (sharedKey.equalsIgnoreCase(key)) {
            int age = request.getAge();
            String firstName =request.getFirstName();
            String lastName = request.getLastName();
            String email = request.getEmail();

            {
                try {
                    Connection db = DriverManager.getConnection(url, username, password);
                    String sql = "INSERT INTO public.customers (id, firstname, lastname, email, age) VALUES((select id from public.customers ORDER BY id desc limit 1)+1,?, ?, ?, ?);";
                    final PreparedStatement statement = db.prepareStatement(sql);
                    statement.setString(1, firstName);
                    statement.setString(2, lastName);
                    statement.setString(3, email);
                    statement.setInt(4, age);
                    statement.executeUpdate();
                } catch (SQLException ex) {
                    throw new RuntimeException(ex);
                }
            }

            // Process the request
            // ....
            // Return success response to the client.
            response = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);
        } else {
            response = new BaseResponse(ERROR_STATUS, AUTH_FAILURE);
        }
        return response;
    }
}