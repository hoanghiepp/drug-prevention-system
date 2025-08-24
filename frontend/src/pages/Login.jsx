import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Page</h2>
        <form>
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
