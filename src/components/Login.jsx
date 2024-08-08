import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>{" "}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
