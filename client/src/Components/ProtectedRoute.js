// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        element={isLoggedIn ? <Navigate to="/home" /> : <Element />}
    />
);

export default ProtectedRoute;
