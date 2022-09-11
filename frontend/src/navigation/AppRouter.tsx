import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import * as RC from "../components/RouteComponents/RouteIndex";

export default function AppRouter() {
  const user = undefined;

  return (
    <Router>
      <Routes>
        <Route index element />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="home" element={<RC.Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
