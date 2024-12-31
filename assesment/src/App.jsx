import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./pages/ProfileCard";
import FullProfile from "./pages/FullProfile";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<ProfileCard />} />

        {/* Protected Route */}
        <Route
          path="/full-profile"
          element={<ProtectedRoute component={FullProfile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
