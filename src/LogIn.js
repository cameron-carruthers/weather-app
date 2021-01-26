import styled from 'styled-components';

const Container = styled.div`
  width: 25rem;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  margin: 0;
  color: #14142B;
`

const Subheading = styled.h2`
  color: #4E4B66;
  font-size: 1.875rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 4.25rem;
`

const Input = styled.input`
  background-color: #EFF0F6;
  height: 4rem;
  border: none;
  border-radius: 5px;
  width: 14.75rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  color: #14142B;

  &:focus {
    outline: 2px solid #5F2EEA;
  }

  &:active {
    outline: 2px solid #5F2EEA;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1.875rem;
  font-size: 0.875rem;
  color: #6E7191;
  font-weight: 500;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  height: 4rem;
  width: 14.75rem;
  background-color: #5F2EEA;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s linear, transform 0.2s linear;

  &:hover {
    background-color: #3f21db;
    transform: translateY(-2px);
  }

  &:disabled {
    transform: none;
    cursor: not-allowed;
    opacity: 35%;
  }
`

const Login = () => {

  return (
    <Container>
      <Heading>Welcome</Heading>
      <Subheading>Tell us about yourself</Subheading>
      <Form>
        <Label>
          Your name
          <Input type="text" name="name" />
        </Label>
        <Label>
          Location
          <Input type="text" name="name" />
        </Label>
        {name && city ? <Button>Continue</Button> : <Button disabled>Continue</Button>}
      </Form>
    </Container>
  )
};

export default Login;