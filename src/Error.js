import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Error = () => (
  <Container>
    <h1>Something Went Wrong</h1>
  </Container>
);

export default Error;