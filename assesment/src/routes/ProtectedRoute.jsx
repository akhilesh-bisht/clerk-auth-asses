import React from "react";
import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ component: Component }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Component />;
};

export default ProtectedRoute;
