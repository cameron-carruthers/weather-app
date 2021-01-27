import styled from 'styled-components';
import WeatherCards from './WeatherCards';
import { darkNeutral, lightNeutral } from './utils';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 600px) {
    align-items: start;
  }
`

const InnerContainer = styled.div`
  width: 90%;
  max-width: 1140px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
  }
`

const Heading = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  margin: 0;
  color: ${darkNeutral};

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`

const Subheading = styled.h2`
  color: ${lightNeutral};
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 4.25rem;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.5rem;
  }
`

const Emphasis = styled.span`
  font-weight: 500;
`

const Forecast = ({ name, city, temps }) => (
  <Container>
    <InnerContainer>
      <Heading>Hi, {name}</Heading>
      <Subheading>Weather forecast: <Emphasis>{city}</Emphasis> for the next 5 days  </Subheading>
      <WeatherCards temps={temps}/>
    </InnerContainer>
  </Container>
);

export default Forecast;