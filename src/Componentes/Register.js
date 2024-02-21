import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { singup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await singup(user.email, user.password);
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
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="passowrd" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Registrarse</button>
      </form>

      <p>
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
};
