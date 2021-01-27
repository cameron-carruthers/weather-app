import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-gap: 44rem;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`

const WeatherCards = ({ temps }) => (
  <Container>
    {temps.map((element, i) => (
      <Card temp={element.temp} day={element.day} date={element.date} bg={i} key={i} />
    ))}
  </Container>
);

export default WeatherCards;
