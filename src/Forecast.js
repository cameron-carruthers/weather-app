import styled from 'styled-components';
import WeatherCards from './WeatherCards';

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
  }
`

const Heading = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  margin: 0;
  color: #14142B;

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 2rem;
  }
`

const Subheading = styled.h2`
  color: #4E4B66;
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 4.25rem;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`

const Emphasis = styled.span`
  font-weight: 500;
`

const Forecast = ({ name, city, temps }) => {

  console.log('name', name);
  console.log('city', city);

  return (
    <Container>
      <InnerContainer>
        <Heading>Hi, {name}</Heading>
        <Subheading>Weather forecast: <Emphasis>{city}</Emphasis> for the next 5 days  </Subheading>
        <WeatherCards />
      </InnerContainer>
    </Container>
  )
};

export default Forecast;