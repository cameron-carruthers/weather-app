import styled from 'styled-components';

const Login = () => (
  <>
    <h1>Welcome</h1>
    <h2>Tell us about yourself</h2>
    <form>
      <label>
        Your name
        <input type="text" name="name" />
      </label>
      <label>
        Location
        <input type="text" name="name" />
      </label>
      <button>Continue</button>
    </form>
  </>
);

export default Login;