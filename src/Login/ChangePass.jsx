import React from "react";
import { Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ChangePass=()=>{
    return (
        <div>
             <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary">
            Save Password
          </Button>
        <Link to="/">
          <Button>LogOut
          </Button>
        </Link>
      </Form>
        </div>
    )
}