import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Componentes/Alert";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container mt-5">
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="*******"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>

      <p>
        Don´t have an Account <Link to="/register">register</Link>
      </p>

      <button onClick={handleGoogleSignin}>login with google</button>
    </div>
  );
};
