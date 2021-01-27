import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, darkNeutral, lightNeutral } from './utils';

const Container = styled.div`
  width: 25rem;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1rem;
  color: ${darkNeutral};

  @media (max-width: 600) {
    font-size: 2rem;
  }
`

const Subheading = styled.h2`
  color: ${lightNeutral};
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 3.25rem;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  height: 4rem;
  width: 14.75rem;
  background-color: ${primaryColor};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s linear, transform 0.2s linear;

  &:hover {
    background-color: #3f21db;
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:disabled {
    transform: none;
    cursor: not-allowed;
    opacity: 35%;
  }

  &:focus {
    outline: 2px solid ${primaryColor};
  }

  &:active {
    outline: 2px solid ${primaryColor};
  }
`

const FloatContainer = styled.div`
  background-color: #EFF0F6;
  height: 4rem;
  border: none;
  border-radius: 5px;
  width: 14.75rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  color: #14142B;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.1rem;
`

const Input = styled.input`
  outline: 0;
  background-color: #EFF0F6;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: #14142B;
`

const Label = styled.div`
  font-size: 1rem;
  color: #6E7191;
  font-size: 0.875rem;
  font-weight: 500;
`

const LogIn = ({ handleLogin }) => {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  return (
    <Container>
      <Heading>Welcome</Heading>
      <Subheading>Tell us about yourself</Subheading>
      <Form onSubmit={e => {
        handleLogin(e, city, name);
        setName('');
        setCity('');
      }}>
        <FloatContainer>
          <Label for="name">Your name</Label>
          <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
        </FloatContainer>
        <FloatContainer>
          <Label for="city">City</Label>
          <Input id="city" type="text" value={city} onChange={e => setCity(e.target.value)}/>
        </FloatContainer>
        {name && city ? <Button>Continue</Button> : <Button disabled>Continue</Button>}
      </Form>
    </Container>
  )
};

export default LogIn;