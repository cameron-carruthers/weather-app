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
  color: ${darkNeutral};
  font-size: 2rem;
`

const Subheading = styled.h2`
  color: ${lightNeutral};
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 4.25rem;
  font-size: 1.5rem;
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
    outline: 2px solid ${primaryColor};
  }

  &:active {
    outline: 2px solid ${primaryColor};
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
        <Label>
          Your name
          <Input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </Label>
        <Label>
          City
          <Input type="text" value={city} onChange={e => setCity(e.target.value)}/>
        </Label>
        {name && city ? <Button>Continue</Button> : <Button disabled>Continue</Button>}
      </Form>
    </Container>
  )
};

export default LogIn;