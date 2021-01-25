import styled from 'styled-components';

const Container = styled.div`
  width: 20rem;
  text-align: center;
`

const Login = () => (
  <Container>
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
  </Container>
);

export default Login;